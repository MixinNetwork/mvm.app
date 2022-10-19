import {NetworkAssetResponse, NetworkClient} from '@mixin.dev/mixin-node-sdk';
import {FixedNumber, utils} from "ethers";
import {ETH_ASSET_ID, WHITELIST_ASSET} from "./constant/common";
import {fetchAssetContract} from "./mvm";
import {toThousands} from "~/helpers/utils";

const networkClient = NetworkClient();
const WHITELIST_ASSET_ID = WHITELIST_ASSET.map((asset) => asset.id);

export const getMvmTvl = async () => {
  const [allAssets, addresses] = await Promise.all([
    Promise.all(
      WHITELIST_ASSET_ID.map(async (assetId): Promise<NetworkAssetResponse> => networkClient.fetchAsset(assetId))
    ),
    Promise.all(
      WHITELIST_ASSET_ID.map(async (id) => ({
        id,
        address: await fetchAssetContract(id)
      }))
    ),
  ]);

  const tokenValues = await Promise.all(allAssets.map(async ({ asset_id, price_usd }) => {
    if (asset_id === ETH_ASSET_ID) {
      const ethSupply = await fetchEthSupply();
      return FixedNumber.from(utils.formatEther(ethSupply)).mulUnsafe(FixedNumber.from(price_usd));
    }

    const contract = addresses.find((a) => a.id === asset_id)?.address;
    if (!contract) return FixedNumber.from('0');

    const token = await fetchMvmToken(contract);
    const totalSupply = utils.formatUnits(token.totalSupply, token.decimals);
    return FixedNumber.from(totalSupply).mulUnsafe(FixedNumber.from(price_usd));
  }));

  let tvl = tokenValues.reduce((pre, cur) => {
    return pre.addUnsafe(cur)
  }, FixedNumber.from('0'));
  return toThousands(Math.floor(Number(tvl)).toString());
}

export const fetchMvmToken = async (address: string) => {
  const response = await fetch(
    `https://scan.mvm.dev/api?module=token&action=getToken&contractaddress=${address}`
  );

  const { result, status } = await response.json();
  if (status === "0")
    throw new Error("No result");

  return result as {
    contractAddress: string;
    decimals: string;
    name: string;
    symbol: string;
    totalSupply: string
    type: string;
  };
}

export const fetchEthSupply = async () => {
  const response = await fetch(
    `https://scan.mvm.dev/api?module=stats&action=ethsupply`
  );

  const { result, status } = await response.json();
  if (status === "0")
    throw new Error("No result");

  return result;
}
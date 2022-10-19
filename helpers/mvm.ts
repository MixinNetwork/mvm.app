import { ethers } from "ethers";
import { REGISTRY_ADDRESS, MVM_RPC_URL } from "./constant/common";
import { REGISTRY_ABI } from "./constant/abi";

export const mvmProvider = ethers.getDefaultProvider(MVM_RPC_URL);
export const RegistryContract = new ethers.Contract(
  REGISTRY_ADDRESS,
  REGISTRY_ABI,
  mvmProvider
);

export const fetchAssetContract = async (
  assetId: string
): Promise<string | undefined> => {
  const id = assetId.replaceAll("-", "");
  const address = await RegistryContract.contracts(`0x${id}`);
  if (address === "0x0000000000000000000000000000000000000000")
    return undefined;
  return address;
};

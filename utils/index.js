export const getMixinEnvironment = () => {
  if (window.webkit && window.webkit.messageHandlers && window.webkit.messageHandlers.MixinContext) {
    return 'iOS';
  }
  if (window.MixinContext && (typeof window.MixinContext.getContext === 'function')) {
    var ctx = JSON.parse(window.MixinContext.getContext());
    return ctx.platform || 'Android';
  }
  return undefined;
}

const getFixVideoWidth = (w) => {
  if (w >= 1350) return 528;
  else if (w >= 1050) return 405;
  else if (w >= 960) return 390;
  else return 500;
}

export const responsiveVideoSize = () => {
  const ratio = 263 / 327;
  const width = window.innerWidth < 720 ? document.body.clientWidth - 48 : getFixVideoWidth(window.innerWidth);
  return {
    width,
    height: parseInt(width * ratio)
  }
}
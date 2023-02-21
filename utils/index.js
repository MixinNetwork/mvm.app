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

export const responsiveVideoSize = () => {
  const ratio = 263 / 327;
  const width = window.innerWidth < 720 ? window.innerWidth - 48 : 528;
  return {
    width,
    height: window.innerWidth < 720 ? parseInt(width * ratio) : 424
  }
}
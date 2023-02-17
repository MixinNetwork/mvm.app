
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
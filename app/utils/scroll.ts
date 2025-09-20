  export function scrollToTop() {
    window.scrollTo({ top: 0, left: 0, behavior: 'smooth' })
  }

  export function getScrollPercent() {
    // https://stackoverflow.com/questions/2387136/cross-browser-method-to-determine-vertical-scroll-percentage-in-javascript

    const currentScroll = document.documentElement.scrollTop || document.body.scrollTop
    const totalScroll = (document.documentElement.scrollHeight || document.body.scrollHeight) - document.documentElement.clientHeight

    return Math.floor(currentScroll / totalScroll * 100);
  }

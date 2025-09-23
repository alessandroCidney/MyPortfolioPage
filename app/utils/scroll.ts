  export function scrollToTop() {
    window.scrollTo({ top: 0, left: 0, behavior: 'smooth' })
  }

  export function getScrollPosition() {
    return document.documentElement.scrollTop || document.body.scrollTop
  }
  
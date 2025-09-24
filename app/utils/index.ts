export function debounce (callback: () => void, wait: number) {
  let timeoutId: number

  return () => {
    window.clearTimeout(timeoutId)

    timeoutId = window.setTimeout(() => {
      callback()
    }, wait)
  };
}

export function wait(ms: number) {
  return new Promise((resolve) => {
    setTimeout(resolve, ms)
  })
}
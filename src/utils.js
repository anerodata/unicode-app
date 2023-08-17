const debounceSetup = (callback, ms) => {
  let timerId
  return (...args) => {
    clearTimeout(timerId)
    timerId = setTimeout(() => {
      callback(...args)
    }, ms)
  }
}
export { debounceSetup }

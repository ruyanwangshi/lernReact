const caches = {
  value: '',
}

export function initState(value, pages = '/', repost = false) {
  return new Promise((resolve) => {
    // if (caches[pages] && repost === false) {
    //   resolve(caches[pages].value)
    //   return
    // }
    setTimeout(() => {
      caches[pages] = {
        value,
      }
      resolve(value)
    }, 1000)
  })
}

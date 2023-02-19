
const cahe = {
    value: ''
}

export function initState(value, repost = false) {
    return new Promise(resolve => {
        if(caches.value && repost === false) {
            return caches.value
        }
        setTimeout(() => {
            caches.value = value
            resolve(value)
        }, 1000)
    })
}
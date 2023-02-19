
const cahe = {
    value: ''
}

export function initState(value, repost = false) {
    return new Promise(resolve => {
        if(caches.value && repost === false) {
            resolve(caches.value)
            return 
        }
        setTimeout(() => {
            caches.value = value
            resolve(value)
        }, 1000)
    })
}
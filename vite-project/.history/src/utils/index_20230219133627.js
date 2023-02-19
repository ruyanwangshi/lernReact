
const cahe = {
    value: ''
}

export function initState(value,pages = '/', repost = false) {
    return new Promise(resolve => {
        if(caches.value && repost === false) {
            resolve(caches[pages].value)
            return 
        }
        setTimeout(() => {
            caches[pages].value = value
            resolve(value)
        }, 1000)
    })
}



export function initState(value) {
    return new Promise(resolve => {
        setTimeout(() => {
            resolve(value)
        }, 1000)
    })
}
export function useEffect(callback) {
    const execute = () => {
        // 重置依赖项
        cleanup(effect);
    }
}


function cleanup(effect) {
    const deps = effect.deps
    for(let i = 0; i<deps.length;i++){
        const effect = deps[i]
        effect && effect.delete(effect)
    }

    effect.deps.clear()
}
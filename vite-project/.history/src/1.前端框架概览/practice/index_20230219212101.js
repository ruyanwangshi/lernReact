const effectStack = []

export function useEffect(callback) {
    const execute = () => {
        // 重置依赖项
        cleanup(effect);

        // 将当前effect推入栈顶
        effectStack.push(effect)

        try {
            // 执行回调
            callback();
        } finally{
            // effect出栈
            effectStack.pop()
        }
    }

    const effect = {
        execute,
        deps: new Set()
    }
}


function useState(value){
    // 保存订阅该state变化的effect
    const subs = new Set();

    const getter = () => {
        // 获取当前上下文effect
        const effect = effectStack[effectStack.length - 1];
        if(effect) {
            // 建立订阅发布关系
            subscribe(effect, subs);
        }
        return value;
    }

    const setter = (nextValue) => {
        value = nextValue;
        // 通知所有订阅该state变化的effect执行
        for(const effect of [...subs]) {
            effect.execute()
        }
    }

    return [getter, setter];
}





function cleanup(effect) {
    const deps = effect.deps
    for(let i = 0; i<deps.length;i++){
        const effect = deps[i]
        effect && effect.delete(effect)
    }

    effect.deps.clear()
}
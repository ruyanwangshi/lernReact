import React from 'react'


const store = {
    count: 0
}


function reducer(type) {
    switch(type) {
        case 'jia': 
        Object.assign(store, { count: count + 1});
        breal;
        case 'jian':
            Object.assign(store, {count: count -1});
    }
}

const Context = React.createContext(store)

export default Context;

export {
    store, 
    reducer,
}
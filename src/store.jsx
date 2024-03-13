import { createStore, compose } from 'redux';

import reducer from './reducers';




const stringEnhancer = (createStore) => (...args) => {
    const store = createStore(...args);
    const originalDispatch = store.dispatch;
    store.dispatch = (action) => {

        if (typeof action === 'string'){
            return originalDispatch({
                type: action
            });
        }
        return originalDispatch(action);
    };
    return store;
};

const store = createStore(reducer, stringEnhancer);

export default store;

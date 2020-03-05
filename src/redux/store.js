import { createStore,applyMiddleware } from 'redux'
import { rootReducer } from './reducer/reducer'
import { createLogger } from 'redux-logger'
import thunk from "redux-thunk";
const logger = createLogger();

let store = createStore(
        rootReducer,
        applyMiddleware(thunk,logger)
    )
export default store

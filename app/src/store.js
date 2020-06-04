import { createStore,applyMiddleware  } from 'redux'
import rootReducer from './services/rootReducer'
import thunkMiddleware from 'redux-thunk'
import loggerMiddleware from './middleware/logger'
import monitorReducerEnhancer from './enhancers/monitorReducer'

const middlewareEnhancer = applyMiddleware(loggerMiddleware, thunkMiddleware)





const store  = createStore(rootReducer)
 
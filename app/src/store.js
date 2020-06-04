import { createStore,applyMiddleware  } from 'redux'
import rootReducer from './services/rootReducer'
import thunkMiddleware from 'redux-thunk'
import loggerMiddleware from './middleware/logger'



const store  = createStore(rootReducer)
 
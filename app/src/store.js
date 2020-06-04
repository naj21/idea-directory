import { createStore,applyMiddleware  } from 'redux'
import rootReducer from './services/rootReducer'
import thunk from 'redux-thunk'


const store  = createStore(rootReducer)
 
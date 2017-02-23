/**
 * Created by AHINDE on 23/02/2017.
 */
import { createStore } from 'redux'
import reducers from './reducers'
const store = createStore(reducers)

export default store;
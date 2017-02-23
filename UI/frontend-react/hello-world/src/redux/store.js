/**
 * Created by AHINDE on 23/02/2017.
 */
import { createStore } from 'redux'
import reducers from './reducers'
let store = createStore(reducers)

export default store;
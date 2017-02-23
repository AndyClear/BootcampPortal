/**
 * Created by AHINDE on 23/02/2017.
 */
import { combineReducers } from 'redux'
import events from './events'
import locations from './locations'
import users from './users'

const reducers = combineReducers({
    events,
    locations,
    users
})

export default reducers


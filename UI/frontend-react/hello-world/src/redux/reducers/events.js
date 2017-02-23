import * as EventActions from '../actions/events.js';

export const initialState = {
    data: []
}

export function events(state = initialState, action) {
    switch (action.type) {
        case EventActions.LOAD_EVENTS:
            return Object.assign({}, state, {
                data: action.data
            })
        default:
            return state
    }
}
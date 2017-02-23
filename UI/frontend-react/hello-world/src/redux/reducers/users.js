import * as UserActions from '../actions/users.js';

export const initialState = {
    data: []
}

export function users(state = initialState, action) {
    switch (action.type) {
        case UserActions.LOAD_EVENTS:
            return Object.assign({}, state, {
                data: action.data
            })
        default:
            return state
    }
}
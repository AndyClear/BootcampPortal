import * as LocationActions from '../actions/locations.js';

export const initialState = {
    data: []
}

export function locations(state = initialState, action) {
    switch (action.type) {
        case LocationActions.LOAD_LOCATIONS:
            return Object.assign({}, state, {
                data: action.data
            })
        default:
            return state
    }
}

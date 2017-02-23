import LocationActions from '../actions/locations.js';

const initialState = {
    data: []
}

function reducer(state = initialState, action) {
    switch (action.type) {
        case LocationActions.LOAD_LOCATIONS:
            return Object.assign({}, state, {
                data: action.data
            })
        default:
            return state
    }
}

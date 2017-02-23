import UserActions from '../actions/users.js';

const initialState = {
    data: []
}

function reducer(state = initialState, action) {
    switch (action.type) {
        case UserActions.LOAD_EVENTS:
            return Object.assign({}, state, {
                data: action.data
            })
        default:
            return state
    }
}
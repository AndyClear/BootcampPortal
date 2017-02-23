import EventActions from '../actions/events.js';

const initialState = {
    data: []
}

function reducer(state = initialState, action) {
    switch (action.type) {
        case EventActions.LOAD_EVENTS:
            return Object.assign({}, state, {
                data: action.data
            })
        default:
            return state
    }
}
export const LOAD_EVENTS = 'LOAD_EVENTS';

export function loadEvents(data) {
    const action = {
        type: LOAD_EVENTS,
        data: data
    }
    return action;
}

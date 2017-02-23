/**
 * Created by AHINDE on 23/02/2017.
 */
export const LOAD_LOCATIONS = 'LOAD_LOCATIONS';

export function loadLocations(data) {
    const action = {
        type: LOAD_LOCATIONS,
        data: data
    }
    return action;
}

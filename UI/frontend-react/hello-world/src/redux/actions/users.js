/**
 * Created by AHINDE on 23/02/2017.
 */
export const LOAD_USERS = 'LOAD_USERS';

export function loadUsers(data) {
    const action = {
        type: LOAD_USERS,
        data: data
    }
    return action;
}

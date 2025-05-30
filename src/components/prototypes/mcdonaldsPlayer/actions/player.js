export const CHANGE_CURRENT_TIME = 'CHANGE_CURRENT_TIME'

export function changeCurrentTime(time) {
    return {
        type: CHANGE_CURRENT_TIME,
        time
    };
}

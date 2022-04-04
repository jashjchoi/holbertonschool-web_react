import {
    FETCH_NOTIFICATIONS_SUCCESS,
    MARK_AS_READ, SET_TYPE_FILTER,
    SET_LOADING_STATE }from '../actions/notificationActionTypes'
import { notificationsNormalizer } from '../schema/notifications'
import immutable, { setIn } from 'immutable';
import { Map } from 'immutable';

let initialState = Map({
    filter: 'DEFAULT',
    notifications: [],
    loading: false
  });

const notificationsReducer = (state = initialState, action = { type: '' }) => {
    state = Map(state);
    switch(action.type) {
        case FETCH_NOTIFICATIONS_SUCCESS:
            const data = notificationsNormalizer(action.data);
            Object.keys(data.notifications).map((key) => {
                data.notifications[key].isRead = false;
            })
            return state.merge(data)
        case MARK_AS_READ:
            return setIn(state, ['notifications', String(action.index), isRead], true);
        case SET_TYPE_FILTER:
            return setIn('filter', action.filter)
        case SET_LOADING_STATE:
            return state.set('loading', !!action.bool)
        default:
            break;
    }
    return state;
}
export {
    notificationsReducer,
    initialState
};

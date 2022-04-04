import { MARK_AS_READ, SET_TYPE_FILTER, FETCH_NOTIFICATIONS_SUCCESS,
  SET_LOADING_STATE } from './notificationActionTypes';
import { normalizedData } from "../schema/notifications";

const ping = (any) => {
  const notifications = Object.values(normalizedData.entities.messages);
  const response = {
      json: () => notifications
  }
  return new Promise((resolve, reject) => {
    if (!notifications) reject("Bad connection");
    setTimeout(() => {
        resolve(response);
    }, 250);
  });
}

const markAsAread = (index) => ({ type: MARK_AS_READ, index });
const setNotificationFilter = (filter) => ({ type: SET_TYPE_FILTER, filter });
const fetchNotificationsSuccess = (data) => ({ type: FETCH_NOTIFICATIONS_SUCCESS, data});
const setLoadingState = (bool) => ({ type: SET_LOADING_STATE, bool});
const setNotifications = (data) => ({ type: FETCH_NOTIFICATIONS_SUCCESS, data});
const fetchNotifications = () => {
  const promise = ping();
  return (dispatch) => {
    dispatch(setLoadingState(true));
    return promise
      .then(jsonData => jsonData.json())
      .then(data => dispatch(setNotifications(data)))
      .finally(() => dispatch(setLoadingState(false)))
  }
}

export {
  markAsAread, setNotificationFilter,
  fetchNotificationsSuccess, fetchNotifications
};

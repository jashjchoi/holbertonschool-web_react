import { reducerCourse, initialState as initialStateCourse } from "./courseReducer";
import uiReducer, { initialState as initialStateUiReducer } from "./uiReducer";
import { notificationReducer, initialState as initialStateNotification } from "./notificationReducer";
import { Map } from "immutable";

const rootReducer = {
  courses: reducerCourse,
  notifications: notificationReducer,
  ui: uiReducer
};

export const initialState = {
  courses: Map(initialStateCourse),
  notifications: Map(initialStateNotification),
  ui: Map(initialStateUiReducer)
};

export default rootReducer;

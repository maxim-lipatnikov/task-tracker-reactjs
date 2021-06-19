import { combineReducers } from "redux";
// import { postReducer } from "./post";
import { themeReducer } from "./theme";
import { projectsReducer } from "./projects";
import { tasksReducer } from "./tasks";

export const rootReducer = combineReducers({
  theme: themeReducer,
  projectsById: projectsReducer,
  tasksById: tasksReducer
})

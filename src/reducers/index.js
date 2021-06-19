import { combineReducers } from "redux";
import { themeReducer } from "./theme";
import { projectsReducer, tasksReducer } from "./projects_tasks";

export const rootReducer = combineReducers({
  theme: themeReducer,
  projectsById: projectsReducer,
  tasksById: tasksReducer
})

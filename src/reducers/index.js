import { combineReducers } from "redux";
import { themeReducer } from "./theme";
import { projectsReducer, tasksReducer, projectsTasksReducer } from "./projects_tasks";

export const rootReducer = combineReducers({
  theme: themeReducer,
  data: projectsTasksReducer
  // projectsById: projectsReducer,
  // tasksById: tasksReducer
})

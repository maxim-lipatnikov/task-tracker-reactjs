import { combineReducers } from "redux";
import { themeReducer } from "./theme";
import { projectsTasksReducer } from "./projects_tasks";

export const rootReducer = combineReducers({
  theme: themeReducer,
  data: projectsTasksReducer
})

import React, { useEffect } from 'react';
import { connect } from "react-redux";
import Task from '../Task/Task'
import { fetchTasksLoad } from '../../actions/projects_tasks';

const mapStateToProps = (state) => ({
  tasks: state.data.projectTasks
})

const mapDispatchToProps = (dispatch) => ({
  dispatchFetchDataLoaded: (projectId) => dispatch(fetchTasksLoad(projectId))
})

const TaskListComponent = ({ projectId, tasks, dispatchFetchDataLoaded }) => {
  useEffect(() => {
    dispatchFetchDataLoaded(projectId)
  }, [projectId])

  if (tasks) {
    return Object.values(tasks).map(i => <Task
      projectId={projectId}
      key={i.id}
      id={i.id}
      completed={i.completed}
    />
    )
  }
  else {
    return () => {
      new Error('No tasks to render')
    }
  }
}
const TaskList = connect(mapStateToProps, mapDispatchToProps)(TaskListComponent)
export default TaskList;
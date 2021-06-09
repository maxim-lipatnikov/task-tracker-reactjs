import React from 'react';
import Task from '../Task/Task'

const TaskList = ({tasksById}) => {
  return (
    <div>
      {Object.values(tasksById).map(i => <Task key={i.id} id={i.id} name={i.name} description={i.description}
        completed={i.completed} tasksById={tasksById} />)}
    </div>
  )
}

export default TaskList;
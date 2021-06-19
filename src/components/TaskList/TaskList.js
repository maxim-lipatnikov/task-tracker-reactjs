import React from 'react';
import Task from '../Task/Task'

const TaskList = (props) => {

  return (
    <div>
      {Object.values(props.tasksById).map(i => <Task key={i.id} name={i.name} description={i.description}
        completed={i.completed} onClick={() => props.changeCompletedStatus(i.id)} />)}
    </div>
  )
}

export default TaskList;
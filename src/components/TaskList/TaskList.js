import Task from '../Task/Task'
import TaskAdd from '../TaskAdd/TaskAdd'
import React from 'react';

class TaskList extends React.Component {
    state = {
        tasks: [
            { id: 1, name: 'Task Name 1', description: 'Task Description 1', completed: false },
            { id: 2, name: 'Task Name 2', description: 'Task Description 2', completed: true },
            { id: 3, name: 'Task Name 3', description: 'Task Description 3', completed: false },
            { id: 4, name: 'Task Name 4', description: 'Task Description 4', completed: true },
            { id: 5, name: 'Task Name 5', description: 'Task Description 5', completed: false },
            { id: 6, name: 'Task Name 6', description: 'Task Description 6', completed: true }
        ]
    }

    handleClick = (id, completed) => {
        this.setState(currentState => {
            const newTasks = [...currentState.tasks]
            let index = newTasks.findIndex(el => el.id === id)
            currentState.tasks[index] = { ...currentState.tasks[index], completed: !completed }
            return {
                tasks: currentState.tasks
            }
        })
    }

    addNewTask = (name, description) => {
        this.setState((currentState) => {
            const newTask = {
                id: currentState.tasks.length + 1,
                name: name,
                description: description,
                completed: false
            }
            const newTasks = [newTask, ...currentState.tasks]
            console.log(newTasks)
            return {
                tasks: newTasks,
            }
        })
    }

    render() {
        return (
            <div>
                <TaskAdd addNewTask={this.addNewTask} />
                <div>
                    {this.state.tasks.map(i => <Task key={i.id} name={i.name} description={i.description}
                        completed={i.completed} onClick={() => this.handleClick(i.id, i.completed)} />)}
                </div>
            </div>
        )
    }
}

export default TaskList;
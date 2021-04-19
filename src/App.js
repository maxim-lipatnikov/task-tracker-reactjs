import styles from './styles.module.css';
import React from 'react';


const Task = (props) => {
  const handleClick = () => {
    return (
      console.log('Task ' + props.id + ' completed status: ' + props.completed)
    )
  }

  return (
    <div className={styles.tasks}>
      <div key={props.name} className={styles.name}>{props.name}</div>
      <div key={props.description} className={styles.description}>{props.description}</div>
      <div key={props.completed} className={styles.completed}>Completed: {String(props.completed)}</div>
      <button onClick={handleClick} className={styles.button}>DONE</button>
    </div>
  )
}

class MyTodoList extends React.Component {
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

  render() {
    return (
      <div>
        {this.state.tasks.map(i => <Task id={i.id} name={i.name} description={i.description}
        completed={i.completed} />)}
      </div>
    )
  }
}

const App = () => {
    return (
      <div>
        <MyTodoList />
      </div>
    )
  }

  export default App;

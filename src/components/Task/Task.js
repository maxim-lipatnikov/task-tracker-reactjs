import styles from './Task.module.css';
import React from 'react';

const Task = (props) => {
  return (
    <div className={styles.tasks}>
      <div className={styles.name}>{props.name}</div>
      <div className={styles.description}>{props.description}</div>
      <div className={styles.completed}>Completed: {String(props.completed)}</div>
      <button onClick={props.onClick} className={styles.button}>DONE</button>
    </div>
  )
}

export default Task;
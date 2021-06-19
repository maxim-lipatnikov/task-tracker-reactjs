import styles from './Project.module.scss';
import React from 'react';
import classnames from "classnames/bind"
import { ThemeContext } from '../App/ThemeContext'
import { Link } from "react-router-dom"


const cx = classnames.bind(styles)

const Project = ({ id, name, handleProjectClick, onClick }) => {
  const project_path = `/projects/${id}/`
  return (
    <div className={cx("container")}>
      <ThemeContext.Consumer>
        {theme => (
          <Link to={project_path}>
            <div className={cx("project", `project-theme-${theme}`)} onChange={handleProjectClick} onClick={onClick}>
              <div className={cx("name")}>{name}</div>
            </div>
          </Link>
        )}
      </ThemeContext.Consumer>
    </div>
  )
}

export default Project;
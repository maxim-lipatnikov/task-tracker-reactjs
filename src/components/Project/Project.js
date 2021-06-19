import styles from './Project.module.scss';
import React from 'react';
import classnames from "classnames/bind"
import { Link } from "react-router-dom"
import { connect } from "react-redux";

const cx = classnames.bind(styles)

const mapStateToProps = (state) => ({
  theme: state.theme.theme
})

const ProjectComponent = ({ id, name, theme, tasksCount }) => {
  const project_path = `/projects/${id}/`
  return (
          <Link to={project_path}>
            <div className={cx("project", `project-theme-${theme}`)}>
              <div className={cx("name")}>{name}</div>
              <div className={cx("tasks")}>Tasks: {tasksCount}</div>
            </div>
          </Link>
  )
}

const Project = connect(mapStateToProps)(ProjectComponent)
export default Project
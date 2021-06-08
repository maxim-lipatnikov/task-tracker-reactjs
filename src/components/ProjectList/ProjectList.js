import React from 'react';
import { connect } from "react-redux";
import Project from '../Project/Project'

const mapStateToProps = (state) => {
  return {projects: state.projectsById.projects}
}

const ProjectListComponent = ({ projects }) => {
  return (
    <div>
      {Object.values(projects).map(i => <Project 
      key={i.id} 
      id={i.id} 
      name={i.name} />)}
    </div>
  )
}

const ProjectList = connect(mapStateToProps)(ProjectListComponent)
export default ProjectList;
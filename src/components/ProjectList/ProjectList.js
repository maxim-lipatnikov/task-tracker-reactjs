import React, { useEffect } from 'react';
import { connect } from "react-redux";
import Project from '../Project/Project'
import { fetchDataLoad } from '../../actions/projects_tasks';

const mapStateToProps = (state) => ({
  projects: state.data.projectsById
})

const mapDispatchToProps = (dispatch) => ({
  dispatchFetchDataLoaded: (projects) => dispatch(fetchDataLoad(projects))
})

const ProjectListComponent = ({ projects, dispatchFetchDataLoaded }) => {
  useEffect(() => {
    dispatchFetchDataLoaded()
}, [])

  if (projects) {
    return Object.values(projects).map(i => <Project
      key={i.id}
      id={i.id}
      name={i.name}
      tasksCount={i.tasks?.length}
    />
    )

  }
else {
  return () => {
      new Error('Nothing to render')
  }
}
}
const ProjectList = connect(mapStateToProps, mapDispatchToProps)(ProjectListComponent)
export default ProjectList;
import React from 'react';
import Project from '../Project/Project'

const ProjectList = ({ projectsById, handleProjectClick }) => {
  return (
    <div>
      {Object.values(projectsById).map(i => <Project key={i.id} id={i.id} name={i.name} onChange={handleProjectClick} />)}
    </div>
  )
}

export default ProjectList;
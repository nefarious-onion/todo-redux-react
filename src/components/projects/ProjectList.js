import React from 'react';
//components
import ProjectSummary from './ProjectSummary';

const ProjectList = ({ projects }) => {

    const renderedList = projects && projects.map(project => {
        return <ProjectSummary  key={project.id} project={project}/>
    })
    return (
        <div className='project-list section'>
            {renderedList}
        </div>
    );
}

export default ProjectList;

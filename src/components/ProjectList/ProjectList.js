import React from 'react';
//components
import ProjectSummary from '../ProjectSummary/ProjectSummary';

const ProjectList = ({ projects }) => {

    const renderedList = projects && projects.map(project =>
        <ProjectSummary project={project} key={project.id}/>
    )
    return (
        <div className='project-list section'>
            {renderedList}
        </div>
    );
}

export default ProjectList;

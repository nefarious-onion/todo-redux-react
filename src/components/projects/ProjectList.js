import React from 'react';
//components
import ProjectSummary from './ProjectSummary';

const ProjectList = () => {
    return (
        <div className='project-list section'>
           <ProjectSummary/>
           <ProjectSummary/>
           <ProjectSummary/>
           <ProjectSummary/>  
        </div>
    );
}

export default ProjectList;

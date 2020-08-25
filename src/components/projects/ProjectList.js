import React from 'react';
import { Link } from 'react-router-dom';
//components
import ProjectSummary from './ProjectSummary';

const ProjectList = ({ projects }) => {

    const renderedList = projects && projects.map(project => {
        return (
            <Link to={`/project/${project.id}`} key={project.id}>
                <ProjectSummary  project={project} />
            </Link>
        )
    })
    return (
        <div className='project-list section'>
            {renderedList}
        </div>
    );
}

export default ProjectList;

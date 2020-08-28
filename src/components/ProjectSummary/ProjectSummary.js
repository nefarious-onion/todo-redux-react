import React from 'react';
import moment from 'moment';

const ProjectSummary = ({ project }) => {
    const date = moment(project.createdAt.toDate()).calendar();

    return (

        <div className="card z-depth-0 project-summary">
            <span className="card-title">{project.title}</span>
            <p>{project.authorFirstName} {project.authorLastName}</p>
            <p className="grey-text">{date}</p>
        </div>

    );
}

export default ProjectSummary;

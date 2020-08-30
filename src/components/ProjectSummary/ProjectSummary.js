import React from 'react';
import moment from 'moment';

const ProjectSummary = ({ project }) => {
    const date = moment(project.createdAt.toDate()).calendar();

    return (

        <div className="card project-summary">
            <div className="card-content teal-text text-darken-3">
                <span className="card-title color-hover">{project.title}</span>
                <p>{project.authorFirstName} {project.authorLastName}</p>
                <p className="project-date">{date}</p>
            </div>
        </div>

    );
}

export default ProjectSummary;

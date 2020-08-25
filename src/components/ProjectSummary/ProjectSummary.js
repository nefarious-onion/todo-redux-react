import React from 'react';

const ProjectSummary = ({ project }) => {
    return (

        <div className="card z-depth-0 project-summary">
            <span className="card-title">{project.title}</span>
            <p>Posted by The Onion</p>
            <p className="grey-text">21st August, 11am</p>
        </div>

    );
}

export default ProjectSummary;

import React from 'react';
import moment from 'moment';
import { useHistory } from 'react-router-dom';

const ProjectSummary = ({ project }) => {
    const history = useHistory();

    const createdAt = moment(project.createdAt.toDate()).calendar();
    let editedAt
    if (project.editedAt) {
        editedAt = moment(project.editedAt.toDate()).calendar();
    }

    const onClick = () => history.push(`/project/${project.id}`)

    const onDone = () => {
        console.log('done');
        
    }

    return (
        <div className="card project-summary">
            <button
                className='waves-effect waves-light btn green accent-3 right '
                id='summaryButton'
                onClick={onDone}
            >
                <i className="material-icons">done</i>
            </button>
            <div className="card-content teal-text text-darken-3" onClick={onClick}>
                <span className="card-title color-hover">{project.title}</span>
                <p>{project.authorFirstName} {project.authorLastName}</p>
                <p className="project-date">Created {createdAt}</p>
                {editedAt
                    ? <p className='project-date'> Edited {editedAt}</p>
                    : null
                }
            </div>
        </div>
    );
}

export default ProjectSummary;

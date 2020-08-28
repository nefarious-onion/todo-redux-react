import React from 'react';
import { useParams, Redirect } from 'react-router-dom';
import moment from 'moment';
//redux
import { useSelector } from 'react-redux';
import { useFirestoreConnect } from 'react-redux-firebase';
//selectors
import { getProject } from '../../projects/projects.selector';
import { getAuth } from '../../auth/auth.selector';

const ProjectDetails = () => {
    const { id } = useParams();
    useFirestoreConnect('projects');
    const project = useSelector(getProject(id));

    const auth = useSelector(getAuth);
    if (!auth.uid) return <Redirect to='/signin' />

    if (project) {
        const date = moment(project.createdAt.toDate()).calendar();
        return (
            <div className='container section project-details'>
                <div className="card z-depth-0">
                    <div className="card-content">
                        <span className="card-title"> {project.title}</span>
                        <p>{project.content}</p>
                    </div>
                    <div className="card-action grey lighten-4 grey-text">
                        <div> Posted by {project.authorFirstName} {project.authorLastName}</div>
                        <div>{date}</div>
                    </div>
                </div>
            </div>
        )
    }

    return (
        <div>
            <p>Loading project...</p>
        </div>
    );
}

export default ProjectDetails;

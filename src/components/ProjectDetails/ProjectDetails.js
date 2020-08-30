import React, { useState } from 'react';
import { useParams, Redirect, Link } from 'react-router-dom';
import moment from 'moment';
//redux
import { useSelector } from 'react-redux';
import { useFirestoreConnect } from 'react-redux-firebase';

//selectors
import { getProject } from '../../projects/projects.selector';
import { getAuth } from '../../auth/auth.selector';
//components
import EditProjectForm from '../EditProjectForm/EditProjectForm';
import ProjectInfo from '../ProjectInfo/ProjectInfo';


const ProjectDetails = () => {
    const auth = useSelector(getAuth);
    const { id } = useParams();
    useFirestoreConnect('projects');
    const project = useSelector(getProject(id));
    const [showEdit, setShowEdit] = useState(false);

    const onDelete = () => {

    }

    const onShowEdit = () => setShowEdit(true);
    const onHideEdit = () => setShowEdit(false);
    
    if (!auth.uid) return <Redirect to='/signin' />
    if (project) {
        const date = moment(project.createdAt.toDate()).calendar();
        return (
            <div className='container section project-details'>
                <div className="card z-depth-0">
                    {showEdit
                        ? <EditProjectForm
                            project={project}
                            onHideEdit={onHideEdit}
                            projectId={id}
                        />
                        : <ProjectInfo
                            project={project}
                            date={date}
                            onShowEdit={onShowEdit}
                            onDelete={onDelete}
                        />
                    }
                </div>
                <Link to='/' className='btn teal lighten-3 black-text'> 
                    Return to All projects
                </Link>
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

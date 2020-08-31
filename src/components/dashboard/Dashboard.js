import React from 'react';
import { Redirect } from 'react-router-dom';
//redux
import { useSelector } from 'react-redux';
import { useFirestoreConnect } from 'react-redux-firebase';
//selectors
import { getProjects } from '../../projects/projects.selector';
import { getAuth } from '../../auth/auth.selector';
//components
import ProjectList from '../ProjectList/ProjectList';


const Dashboard = () => {
    useFirestoreConnect([
        {  
            collection: 'projects',
            orderBy: ['createdAt', 'desc']
        }
    ]);

    const projects = useSelector(getProjects);
    const auth = useSelector(getAuth);

    if (!auth.uid) return <Redirect to='/signin' />

    return (
        <div className='dashboard container'>
            <div className="row">
                <div className="col s12">
                    <ProjectList projects={projects} />
                </div>
            </div>
        </div>
    );
}

export default Dashboard;

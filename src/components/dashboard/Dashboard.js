import React from 'react';
import { useSelector } from 'react-redux';
import {  useFirestoreConnect } from 'react-redux-firebase';
//selectors
import { getProjects } from '../../store/selectors/projectSelectors';
//components
import Notifications from './Notifications';
import ProjectList from '../projects/ProjectList';


const Dashboard = () => {
    useFirestoreConnect('projects');
    const projects = useSelector(getProjects);
    
    return (
        <div className='dashboard container'>
            <div className="row">
                <div className="col s12 m6">
                    <ProjectList projects={projects} />
                </div>
                <div className="col s12 m5 offset-m1">
                    <Notifications/>
                </div>
            </div>
        </div>
    );
}

export default Dashboard;

import React, { useState, useCallback } from 'react';
//redux
import {  useDispatch } from 'react-redux';
import { useFirestore, useFirestoreConnect } from 'react-redux-firebase';
//actions
import { editProject } from '../../projects/projects.action';

const EditProjectForm = ({ project, onHideEdit, projectId }) => {
    const firestore = useFirestore();
    const dispatch = useDispatch;
    //useFirestoreConnect('projects');
    const updateProject = useCallback(editedProject =>
        dispatch(editProject(
            { firestore }, editedProject, projectId)
        ), [ dispatch, firestore, projectId ]
    );

    const [title, setTitle] = useState(project.title);
    const [content, setContent] = useState(project.content);

    const onSubmit = event => {
        event.preventDefault();

        const editedProject = {
            ...project,
            title, 
            content,
        }
        console.log(editedProject);
        onHideEdit();
        //updateProject(editedProject);
    }

    return (
        <div className='container'>
        <form className='white' onSubmit={onSubmit}>
            <h5 className="gray-text grey-darken-3">Edit project</h5>
            <div className="input-field">
                <label htmlFor="email" className='active'>Title</label>
                <input 
                    type="text" 
                    id='title' 
                    onChange={event => setTitle(event.target.value)} 
                    value={title}
                />
            </div>
            <div className="input-field">
                <label htmlFor="content" className='active'>Content</label>
                <textarea 
                    id="content" 
                    className='materialize-textarea' 
                    onChange={event => setContent(event.target.value)} 
                    value={content}
                />
            </div>
            <div className="input-field">
                <button 
                    className="btn deep-orange lighten-1 z-depth-0"
                    id='detailButton'
                    type='submit'
                >
                    Edit Project
                </button>
                <button 
                    className="btn deep-orange lighten-1 z-depth-0"
                    id='detailButton'
                    onClick={onHideEdit}
                >
                   Cancel
                </button>
            </div>
        </form>
        
    </div>
    );
}

export default EditProjectForm;

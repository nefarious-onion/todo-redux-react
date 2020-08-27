import React, { useState, useCallback } from 'react';
//redux
import { useDispatch, useSelector } from 'react-redux';
import { useFirestore } from 'react-redux-firebase';
//actions
import { createProject } from '../../projects/projects.action';
//selectors
import { getAuth } from '../../auth/auth.selector';
import { Redirect } from 'react-router-dom';

const CreateProject = (props) => {
    const firestore = useFirestore();
    const dispatch = useDispatch();
    const createNew = useCallback( project => 
        dispatch(createProject(
            { firestore }, project)
        ), [ dispatch, firestore ]
    );
    const auth = useSelector(getAuth);

    const [title, setTitle] = useState('');
    const [content, setContent] = useState('');
    
    const onSubmit = event => {
        event.preventDefault();
        const project = {
            title,
            content
        }
        console.log(project);
        createNew(project)
    }

    if (!auth.uid) return <Redirect to='/signin' />

    return (
        <div className='container'>
            <form className='white' onSubmit={onSubmit}>
                <h5 className="gray-text grey-darken-3">Create new project</h5>
                <div className="input-field">
                    <label htmlFor="email">Title</label>
                    <input 
                        type="text" 
                        id='title' 
                        onChange={event => setTitle(event.target.value)} 
                        value={title}
                    />
                </div>
                <div className="input-field">
                    <label htmlFor="content">Content</label>
                    <textarea id="content" className='materialize-textarea' onChange={event => setContent(event.target.value)}></textarea>
                </div>
                <div className="input-field">
                    <button className="btn pink lighten-1 z-depth-0">Create Project</button>
                </div>
            </form>
            
        </div>
    );
}

export default CreateProject;

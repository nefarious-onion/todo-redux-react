import React, { useState, useCallback } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { useFirestore, useFirestoreConnect} from 'react-redux-firebase';
//store
import { createProject } from '../../store/actions/projectActions';

const CreateProject = (props) => {
    const firestore = useFirestore();
    useFirestoreConnect('projects');
    const projects = useSelector(state => state.firestore.projects)
    const dispatch = useDispatch();
    const createNew = useCallback( project => 
        dispatch(createProject(
            { firestore }, project)
        ), [ dispatch, firestore ]
    );

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

// const mapDispatchToProps = (dispatch) => {
//     return {
//         createProject: (project) => dispatch(createProject(project))
//     }
// }

//export default connect(null, mapDispatchToProps)(CreateProject);
export default CreateProject;

import React, { useState } from 'react';
import { connect } from 'react-redux';
//store
import { createProject } from '../../store/actions/projectActions';

const CreateProject = ({ createProject }) => {
    const [title, setTitle] = useState('');
    const [content, setContent] = useState('');
    
    const onSubmit = event => {
        event.preventDefault();
        const project = {
            title,
            content
        }
        console.log(project);
        createProject(project)
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

const mapDispatchToProps = (dispatch) => {
    return {
        createProject: (project) => dispatch(createProject(project))
    }
}

export default connect(null, mapDispatchToProps)(CreateProject);

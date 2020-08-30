import React from 'react';

const ProjectInfo = ({ project, date, onShowEdit, }) => {
    
    return (
        <>
            <div className="card-content ">
                <button className='waves-effect waves-light btn-large green accent-3 right ' id='detailButton' ><i className="material-icons">done</i></button>

                <span className="card-title"> {project.title}</span>
                <p>{project.content}</p>
            </div>
            <div className="card-action deep-orange lighten-5 deep-orange-text text-darken-3" >
                <button className='waves-effect waves-light btn red right' id='detailButton' ><i className="material-icons">clear</i></button>
                <button
                    className='waves-effect waves-light btn cyan accent-3 right'
                    id='detailButton'
                    onClick={onShowEdit}
                >
                    <i className="material-icons">edit</i>
                </button>
                <div> Posted by {project.authorFirstName} {project.authorLastName}</div>
                <div>{date}</div>
            </div>
        </>
    );
}

export default ProjectInfo;

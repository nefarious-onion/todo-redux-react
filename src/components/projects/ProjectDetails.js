import React from 'react';
import { useParams } from 'react-router-dom';

const ProjectDetails = () => {
    const { id } = useParams();

    return (
        <div className='container section project-details'>
            <div className="card z-depth-0">
                <div className="card-content">
                    <span className="card-title">Project Title - {id}</span>
                    <p>Lorem ipsum dolor sit amet, consectetur adipisicing elit. Nam, unde consequuntur aliquam suscipit optio tempora?</p>
                </div>
                <div className="card-action grey lighten-4 grey-text">
                    <div> Posted by The Onion</div>
                    <div> 21st August, 12pm</div>
                </div>
            </div>
        </div>
    );
}

export default ProjectDetails;

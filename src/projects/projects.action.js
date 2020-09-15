export const CREATE_PROJECT = 'CREATE_PROJECT';
export const CREATE_PROJECT_ERROR = 'CREATE_PROJECT_ERROR'
export const DELETE_PROJECT = 'DELETE_PROJECT';
export const DELETE_PROJECT_ERROR = 'DELETE_PROJECT_ERROR';
export const EDIT_PROJECT = 'EDIT_PROJECT';
export const EDIT_PROJECT_ERROR = 'EDIT_PROJECT_ERROR';
export const PROJECT_DONE = 'PROJECT_DONE';
export const PROJECT_DONE_ERROR = 'PROJECT_DONE_ERROR';

export const createProject = ({ firestore }, project) => {

    return (dispatch, getState) => {
        const profile = getState().firebase.profile;
        const authorId = getState().firebase.auth.uid;
        //make async call to db
        firestore
            .collection('projects')
            .add({
                ...project,
                authorFirstName: profile.firstname,
                authorLastName: profile.lastname,
                authorId: authorId,
                createdAt: new Date(),
                completed: false
            })
            .then(() => {
                dispatch({ type: CREATE_PROJECT, project })
            })
            .catch(error => {
                dispatch({ type: CREATE_PROJECT_ERROR, error })
            })
    }
}

export const editProject = ({ firestore }, editedProject, projectId) => {
    return (dispatch, getState) => {
        firestore
            .collection('projects')
            .doc(projectId)
            .update({
                ...editedProject,
                editedAt: new Date()
            })
            .then(()=> {
                dispatch({ type: EDIT_PROJECT, editedProject })
            })
            .catch(error => {
                dispatch({ type: EDIT_PROJECT_ERROR, error})
            })
    }
}

// const finishProject = () => {
    
// }
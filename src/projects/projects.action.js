export const CREATE_PROJECT = 'CREATE_PROJECT';
export const CREATE_PROJECT_ERROR = 'CREATE_PROJECT_ERROR'

export const createProject = ({ firestore }, project) => {
    console.log(firestore);

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
                createdAt: new Date()
            })
            .then(() => {
                dispatch({ type: CREATE_PROJECT, project })
            })
            .catch(error => {
                dispatch({ type: CREATE_PROJECT_ERROR, error })
            })
    }
}
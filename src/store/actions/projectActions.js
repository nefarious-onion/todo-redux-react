export const createProject = ({ firestore }, project) => {
    console.log(firestore);
    
    return (dispatch, getState) => {
        //make async call to db
        firestore.collection('projects').add({
            ...project,
            authorFirstName: 'Onion',
            authorLastName: 'Nefarious',
            authorId: 12345,
            createdAt: new Date()
        }).then(() => {
            dispatch({ type: 'CREATE_PROJECT', project })

        }).catch(error => {
            dispatch({ type: 'CREATE_PROJECT_ERROR', error })
        })
    }
}
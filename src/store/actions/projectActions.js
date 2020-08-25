export const createProject = (project) => {
    return (dispatch, getState, { getFirebase, getFirestore }) => {
        //make async call to db
        const firestore = getFirestore();
        firestore.collection('projects').add({
            ...project,
            authorFirstName: 'Onion',
            authorLastName: 'Nefarious',
            authorId: 12345,
            createdAt: new Date()
        })
        dispatch({type: 'CREATE_PROJECT', project})
    }
}
export const LOGIN_SUCCESS = 'LOGIN_SUCCESS';
export const LOGIN_ERROR = 'LOGIN_ERROR';
export const SIGNOUT_SUCCESS = 'SIGNOUT_SUCCESS';
export const SIGNUP_SUCCESS = 'SIGNUP_SUCCESS';
export const SIGNUP_ERROR = 'SIGNUP_ERROR';

export const signIn = ({ firebase }, credentials) => {
    return (dispatch, getState) => {
        firebase
            .auth()
            .signInWithEmailAndPassword(
                credentials.email,
                credentials.password
            )
            .then(() => {
                dispatch({ type: LOGIN_SUCCESS })
            })
            .catch(error => {
                dispatch({ type: LOGIN_ERROR, error })
            })
    }
}

export const signOut = ({ firebase }) => {
    return (dispatch, getState) => {
        firebase
            .auth()
            .signOut()
            .then(() => {
                dispatch({ type: SIGNOUT_SUCCESS })
            })
    }
}

export const signUp = ({ firestore, firebase }, newUser) => {
    return (dispatch, getState) => {
        firebase
            .auth()
            .createUserWithEmailAndPassword(
                newUser.email,
                newUser.password
            )
            .then(response => {
                return firestore
                    .collection('users')
                    .doc(response.user.uid)
                    .set({
                        firstname: newUser.firstname,
                        lastname: newUser.lastname,
                        initials: newUser.firstname[0] + newUser.lastname[0]
                    })
            })
            .then(() => {
                dispatch({ type: SIGNUP_SUCCESS})
            })
            .catch(error => {
                dispatch({ type: SIGNUP_ERROR, error })
            })
    }
}
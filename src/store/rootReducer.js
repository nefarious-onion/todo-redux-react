
import { combineReducers } from 'redux';
import { firebaseReducer } from 'react-redux-firebase';
import { firestoreReducer } from 'redux-firestore';
//reducers
import authReducer from '../auth/auth.reducer';
import projectReducer from '../projects/projects.reducer';

const rootReducer = combineReducers({
    auth: authReducer,
    project: projectReducer,
    firebase: firebaseReducer,
    firestore: firestoreReducer,
});

export default rootReducer;
import React from 'react';
import ReactDOM from 'react-dom';
import * as serviceWorker from './serviceWorker';
//redux
import { Provider, useSelector } from 'react-redux';
//firebase
import { createFirestoreInstance } from 'redux-firestore';
import { ReactReduxFirebaseProvider, isLoaded } from 'react-redux-firebase';
import firebase from './firebase/firebase';
//store
import store from './store';
//components
import App from './App';
//selectors
import { getAuth } from './auth/auth.selector';
//styles
import './index.css';

const rrfConfig = {
  userProfile: 'users',
  attachAuthIsReady: true,
  useFirestoreForProfile: true // Firestore for Profile instead of Realtime DB
};

const rrfProps = {
  firebase,
  config: rrfConfig,
  dispatch: store.dispatch,
  createFirestoreInstance // <- needed if using firestore
};

const AuthIsLoaded = ({ children }) => {
  const auth = useSelector(getAuth);
  if (!isLoaded(auth)) {
    return <div>Loading page...</div>
  }
  return children;
}

ReactDOM.render(
  <Provider store={store}>
    <ReactReduxFirebaseProvider {...rrfProps}>
      <AuthIsLoaded>
        <App />
      </AuthIsLoaded>
    </ReactReduxFirebaseProvider>
  </Provider>,
  document.getElementById("root")
);
serviceWorker.register();
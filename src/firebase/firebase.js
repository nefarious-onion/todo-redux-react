import firebase from 'firebase/app';
import 'firebase/firestore';
import 'firebase/auth'

const firebaseConfig = {
  apiKey: "AIzaSyBuqMYHa2iRzD_v60qnyQ9Gw67EY5cOym8",
  authDomain: "todo-react-redux-563b5.firebaseapp.com",
  databaseURL: "https://todo-react-redux-563b5.firebaseio.com",
  projectId: "todo-react-redux-563b5",
  storageBucket: "todo-react-redux-563b5.appspot.com",
  messagingSenderId: "655163973069",
  appId: "1:655163973069:web:44e7192e1de59134877884"
};
// Initialize Firebase
try {
  firebase.initializeApp(firebaseConfig);
  firebase.firestore().settings({})
} catch (error) {
  console.log(error);
}


export default firebase;
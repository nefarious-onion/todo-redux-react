# React Redux Todo

Application is deployed at Firebase Hosting https://todo-react-redux-563b5.web.a

Data is stored to Cloud Firestore with security rules that allow read and write only for registered users.

Application uses Firebase authentication.

Application state is handled by Redux with react-redux- and react-redux-firebase-libraries.

Application is based on the tutorial by NetNinja https://youtu.be/Oi4v5uxTY5o

Biggest changes: 
- I have changed the original app from class components to functional components.
- I have exclusively used hooks with Firestore, Firebase and Redux.
- I completely refactored the file structure to my liking.

Yet To Come:
- delete and done functionalities for todos
- notifications
- Edit Profile
- View own projects
- Add more content to projects i.e. checkbox-list
- Comment projects
- Refactor code to use Container Components

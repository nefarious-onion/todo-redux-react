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

Issues:
- Edit projects does not work. It has an issue with hooks and I have yet to find a solution.
- I did not have time to add delete and done functionalities yet even though the buttons for them exists
- Notifications do not work. They were supposed to be done with cloud functions but that requires paid plan to Firebase and I have not yet decided what to do with that. Currently I have the free plan only so Notifications do not exist.

Yet To Come:
- Edit Profile
- View own projects
- Add more content to projects i.e. checkbox-list
- Comment projects
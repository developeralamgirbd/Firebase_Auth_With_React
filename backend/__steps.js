/**
 * Firebase authentication user data save in mongodb
 *
 * 1. npm i firebase-admin
 * 2. Go to firebase dashboard than click project overview and select 'users and permissions'
 * 3. select 'Service accounts' than copy 'Admin SDK configuration snippet code'
 * 4. Click 'generate new private key' when download a json file
 * 5. create a folder in src that's name firebase
 * 6. create a file that's name 'firebase.config.js' and past 'Admin SDK configuration snippet code'
 * 7. and private key json file past and rename serviceAccountKey.json
 * 8. require("./serviceAccountKey.json") in firebase.config.js
 * 9. const decodedValue = admin.auth().verifyIdToken(token) method call in controller;
 * 10. save decodedValue in mongodb
 */
import firebase from "firebase";

//Paste your firebaseConfig here
const firebaseConfig = {
    apiKey: "AIzaSyCv128iTeVDQ2QX9ZfO6Ll6ZxI0skKo4wk",
    authDomain: "project-71-33b81.firebaseapp.com",
    projectId: "project-71-33b81",
    storageBucket: "project-71-33b81.appspot.com",
    messagingSenderId: "190016305829",
    appId: "1:190016305829:web:37a344338f560f2d42ab4c"
  };




firebase.initializeApp(firebaseConfig);

export default firebase.firestore();



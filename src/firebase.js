import firebase from 'firebase'

const firebaseConfig = {
    apiKey: "AIzaSyBiQDm-THwdjRahj05blIYpEnx9vSuTbd8",
    authDomain: "slack-clone-project-76e17.firebaseapp.com",
    projectId: "slack-clone-project-76e17",
    storageBucket: "slack-clone-project-76e17.appspot.com",
    messagingSenderId: "957773957045",
    appId: "1:957773957045:web:d2cc899cca2bcf1d6d7bfc"
  };


  const firebaseApp = firebase.initializeApp(firebaseConfig);
  const db  = firebaseApp.firestore();
  const auth = firebase.auth();    {/* from 15 -16 is the means of setting up our authentication provider */}
  const provider = new firebase.auth.GoogleAuthProvider(); {/* so here we re using google provider to authenticate  */}


  
  export { auth, provider};
  export  default db;
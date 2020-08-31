import firebase from 'firebase';

const firebaseConfig = {
    apiKey: "AIzaSyAZdcyIeGY-yP7ifsUWPSUvV8NhQJ8K54k",
    authDomain: "whatsapp-clone-3da65.firebaseapp.com",
    databaseURL: "https://whatsapp-clone-3da65.firebaseio.com",
    projectId: "whatsapp-clone-3da65",
    storageBucket: "whatsapp-clone-3da65.appspot.com",
    messagingSenderId: "838338977251",
    appId: "1:838338977251:web:de5a341181886ca9ee14d6",
    measurementId: "G-VEWQFX8CKF"
  };

  const firebaseApp = firebase.initializeApp(firebaseConfig);

  const db = firebaseApp.firestore();
  const auth = firebase.auth();

  const provider = new firebase.auth.GoogleAuthProvider();

  export { auth, provider };
  export default db;



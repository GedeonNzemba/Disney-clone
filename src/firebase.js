import firebase from "firebase";

const firebaseConfig = {
  apiKey: "AIzaSyCAiGGkmiclo6cZF4AwmkD3O99EaNKY8pw",
  authDomain: "disney-clone-a8594.firebaseapp.com",
  projectId: "disney-clone-a8594",
  storageBucket: "disney-clone-a8594.appspot.com",
  messagingSenderId: "553138106718",
  appId: "1:553138106718:web:3a0ea2f96466687dd55fcf"
};

const firebaseApp = firebase.initializeApp(firebaseConfig);
const db = firebaseApp.firestore();
const auth = firebase.auth();
const provider = new firebase.auth.GoogleAuthProvider();
const storage = firebase.storage();



export { auth, provider, storage };
export default db;

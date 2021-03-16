import fbAppli from 'firebase/app';
import 'firebase/firestore';

/******* Ex#3 - Étape B ********************************/ 
// For Firebase JS SDK v7.20.0 and later, measurementId is optional
const firebaseConfig = {
  apiKey: "AIzaSyDoD_xGCWYNZMaraMsmQR6muBlpozZxG-s",
  authDomain: "pvt-ex3-firestore.firebaseapp.com",
  projectId: "pvt-ex3-firestore",
  storageBucket: "pvt-ex3-firestore.appspot.com",
  messagingSenderId: "726201134990",
  appId: "1:726201134990:web:6546d9ce69bcd1be613edf",
  measurementId: "G-9SBK6FK4K1"
};

// Initialiser Firebase
if(!fbAppli.apps.length) {
  fbAppli.initializeApp(firebaseConfig);
}

// Initialiser Firestore
const bd = fbAppli.firestore();
/******* Ex#3 - Étape C ********************************/ 
// Exporter (par défaut) la référence à "bd" pour pouvoir l'utiliser dans le composant ListeProduits
export default bd;
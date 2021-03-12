import fbAppli from 'firebase/app';
import 'firebase/firestore';

/******* Ex#3 - Étape B ********************************/ 
// Ajouter votre objet de configuration Firebase
const firebaseConfig = {
  apiKey: "AIzaSyAgAp5tFRToZSLAeI-5M8rBFe03_bqVQMQ",
  authDomain: "cn-react.firebaseapp.com",
  projectId: "cn-react",
  storageBucket: "cn-react.appspot.com",
  messagingSenderId: "1065458615900",
  appId: "1:1065458615900:web:24750a6ab98b7a9a38c899",
  measurementId: "G-Q3ZNK2873W"
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
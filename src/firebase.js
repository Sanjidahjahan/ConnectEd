import { initializeApp } from 'firebase/app';
import { getFirestore } from 'firebase/firestore';

const firebaseConfig = {
  apiKey: "AIzaSyAxPeiprJ5M0GB4PpMq9tb4WDKeBn8YosU",
  authDomain: "connected-implementation.firebaseapp.com",
  projectId: "connected-implementation",
  storageBucket: "connected-implementation.firebasestorage.app",
  messagingSenderId: "1021355784790",
  appId: "1:1021355784790:web:685ad2e92cf503fcaa59f7"
};

const app = initializeApp(firebaseConfig);

export const db = getFirestore(app);
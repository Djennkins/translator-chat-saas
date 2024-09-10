import { getApp, getApps, initializeApp } from 'firebase/app';
import { getAuth } from 'firebase/auth';
import { getFirestore } from 'firebase/firestore';
import { getFunctions } from 'firebase/functions';

const firebaseConfig = {
    apiKey: 'AIzaSyCFwu7TpjRSC1b4oXEWNrejxVQ7XAslYmo',
    authDomain: 'translator-chat-saas.firebaseapp.com',
    projectId: 'translator-chat-saas',
    storageBucket: 'translator-chat-saas.appspot.com',
    messagingSenderId: '809168952599',
    appId: '1:809168952599:web:2779cee6584d2c5dc92b52',
};

const app = getApps().length ? getApp() : initializeApp(firebaseConfig);
const auth = getAuth(app);
const db = getFirestore(app);
const functions = getFunctions(app);

export { auth, db, functions };

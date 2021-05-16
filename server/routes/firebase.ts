import firebase from 'firebase/app';
import 'firebase/database';
import { Database } from '../model/firebase/Database';

const firebaseConfig = {
  apiKey: 'AIzaSyAhAxEsD9zUf8bZ_UCPjmfXeisn2iesI2I',
  authDomain: 'url-shortener-343ab.firebaseapp.com',
  projectId: 'url-shortener-343ab',
  storageBucket: 'url-shortener-343ab.appspot.com',
  messagingSenderId: '534170623841',
  appId: '1:534170623841:web:088caf26e83f8a71932f20',
};

firebase.initializeApp(firebaseConfig);

export const database: Database = firebase.database();

import Firebase from 'firebase/app';
import 'firebase/firestore';
import 'firebase/auth';
import { seedDatabase } from '../seed';

const config = {
  apiKey: 'AIzaSyAOL9fTdksaeASvzC7cQjlnrkRrlThlEQc',
  authDomain: 'netflix-clone-1c3cc.firebaseapp.com',
  projectId: 'netflix-clone-1c3cc',
  storageBucket: 'netflix-clone-1c3cc.appspot.com',
  messagingSenderId: '344446442778',
  appId: '1:344446442778:web:0158328cf50ae0af60e0a3',
};

const firebase = Firebase.initializeApp(config);

seedDatabase(firebase);

export { firebase };

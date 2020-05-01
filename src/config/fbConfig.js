import firebase from 'firebase/app';
import 'firebase/firestore';
import 'firebase/analytics';
import 'firebase/auth';

const firebaseConfig = {
    apiKey: "AIzaSyCTfy8SGXWiIBxw-63rr9A2XTTcnIHEmkM",
    authDomain: "chatroom-9111e.firebaseapp.com",
    databaseURL: "https://chatroom-9111e.firebaseio.com",
    projectId: "chatroom-9111e",
    storageBucket: "chatroom-9111e.appspot.com",
    messagingSenderId: "918099875895",
    appId: "1:918099875895:web:23c0a778e22e2a256887b2",
    measurementId: "G-1QR45D3RW7"
};

firebase.initializeApp(firebaseConfig)
firebase.firestore().settings({ timestampsInSnapshots: true })
firebase.analytics();
firebase.firestore();

export default firebase;

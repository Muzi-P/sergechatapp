import authReducer from "./authReducer";
import { combineReducers } from "redux";
import messagesReducer from "./messagesReducer";
import { firestoreReducer } from 'redux-firestore';
import { firebaseReducer } from "react-redux-firebase";

const rootRedcer = combineReducers({
    auth: authReducer,
    messages: messagesReducer,
    firestore: firestoreReducer,  /* sync firetore into our app state */
    firebase: firebaseReducer
})

export default rootRedcer;
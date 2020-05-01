import authReducer from "./authReducer";
import { combineReducers } from "redux";
import messagesReducer from "./messagesReducer";

const rootRedcer = combineReducers({
    auth: authReducer,
    messages: messagesReducer
})

export default rootRedcer;
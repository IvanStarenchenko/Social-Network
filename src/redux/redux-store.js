import {applyMiddleware, combineReducers, compose, legacy_createStore as createStore} from "redux"; 
import profileReducer from "./profile-reducer";
import messangerReducer from "./messanger-reducer";
import friendsReducer from "./friends-reducer";
import usersReducer from "./users-reducer";
import authReducer from "./auth-reducer";
import appReducer from "./app-reducer";
import  thunkMiddleware from "redux-thunk";
import { reducer as formReducer } from "redux-form";

let reducers = combineReducers({
    profilePage: profileReducer,
    messangerPage: messangerReducer,
    friendsPage: friendsReducer,
    usersPage: usersReducer,
    auth: authReducer,
    form: formReducer,
    app: appReducer,
});
const composeEnhancers = window.__REDUX_DEVTOOLS_EXTENSION_COMPOSE__ || compose; 
const store = createStore(reducers, /* preloadedState, */ composeEnhancers(
    applyMiddleware(thunkMiddleware)
  ));

export default store; 
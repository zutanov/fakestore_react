import cartReducer from "./reducers/cartReducer";
import authReducer from "./reducers/authReducer";
import { combineReducers, createStore, applyMiddleware } from "redux";
import thunk from "redux-thunk";
import { composeWithDevTools } from "redux-devtools-extension";

const rootReducers = combineReducers({cartReducer, authReducer})

const store = createStore(rootReducers, composeWithDevTools(applyMiddleware(thunk)))

export default store
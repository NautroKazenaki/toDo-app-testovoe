import {createStore, combineReducers, applyMiddleware, compose} from 'redux';
import mainReducer from './main-reducer'
import thunkMiddleWare from "redux-thunk"
import { reducer as formReducer } from 'redux-form';

let reducers = combineReducers({
    mainContentPage: mainReducer,
    form: formReducer,
})



const composeEnhancers = window.__REDUX_DEVTOOLS_EXTENSION_COMPOSE__ || compose;
const store = createStore(reducers,  composeEnhancers(applyMiddleware(thunkMiddleWare)));
window._store_ = store;
export default store
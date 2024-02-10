import { combineReducers, createStore, applyMiddleware } from 'redux';
import usersReducer from './reducers';
import { thunk } from 'redux-thunk';


const rootReducer = combineReducers({
  users: usersReducer,

});

export type RootState = ReturnType<typeof rootReducer>;

const store = createStore(rootReducer, applyMiddleware(thunk));



export default store;
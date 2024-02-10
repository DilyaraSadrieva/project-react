import axios from 'axios';
import { Dispatch } from 'redux';
import { User } from '../types';

export const FETCH_USERS_REQUEST = 'FETCH_USERS_REQUEST';
export const FETCH_USERS_SUCCESS = 'FETCH_USERS_SUCCESS';
export const FETCH_USERS_FAILURE = 'FETCH_USERS_FAILURE';

export const fetchUsersRequest = () => ({
  type: FETCH_USERS_REQUEST,
});

export const fetchUsersSuccess = (users: User[]) => ({
  type: FETCH_USERS_SUCCESS,
  payload: users,
});
export const fetchUsersFailure = (error: string) => ({
   type: FETCH_USERS_FAILURE,
   payload: error,
 });
 
 export const fetchUsers = () => {
   return async (dispatch: Dispatch) => {
     dispatch(fetchUsersRequest());
     try {
       const response = await axios.get('https://randomuser.me/api/?results=10');
       const users = response.data.results.map((result: any) => ({
         id: result.login.uuid,
         name: `${result.name.first} ${result.name.last}`,
         login: result.login.username,
         picture: result.picture.thumbnail,
         location: `${result.location.street.number} ${result.location.street.name}, ${result.location.city}, ${result.location.state}, ${result.location.postcode}`,
         phone: `+7 ${result.phone}`,
         email: result.email,
         // другие поля
       }));
       dispatch(fetchUsersSuccess(users));
     } catch (error) {
       dispatch(fetchUsersFailure(error.message));
     }
   };
 };
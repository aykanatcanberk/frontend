import axios from "axios";
import {
  FETCH_USERS_FAILURE,
  FETCH_USERS_REQUEST,
  FETCH_USERS_SUCCESS,
} from "./userTypes";

export const fetchUsers = (
  fetchLocation = "https://jsonplaceholder.typicode.com/users"
) => {
  return (dispatch) => {
    dispatch(fetchUserRequest());
    axios
      .get(fetchLocation)
      .then((axiosResponse) => {
        const users = axiosResponse.data;
        dispatch(fetchUsersSuccess(users));
      })
      .catch(error => {
        dispatch(fetchUsersFailure(error.massage))
      });
  };
};

export const fetchUserRequest = () => {
  return {
    type: FETCH_USERS_REQUEST,
  };
};

export const fetchUsersFailure = (error) => {
  return {
    type: FETCH_USERS_FAILURE,
    payload: error,
  };
};

export const fetchUsersSuccess = (users) => {
  return {
    type: FETCH_USERS_SUCCESS,
    payload: users,
  };
};

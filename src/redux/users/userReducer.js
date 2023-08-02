import {
  FETCH_USERS_FAILURE,
  FETCH_USERS_REQUEST,
  FETCH_USERS_SUCCESS,
} from "./userTypes";

const initialState = {
  loading: "false",
  users: [],
  error: "",
};

const userReducer = (previousState = initialState, action) => {
  switch (action.type) {
    case FETCH_USERS_REQUEST:
      return {
        ...previousState,
        loading: true,
        users: [],
        error: "",
      };

    case FETCH_USERS_FAILURE:
      return {
        ...previousState,
        loading: false,
        users: [],
        error: action.payload,
      };

    case FETCH_USERS_SUCCESS:
      return {
        ...previousState,
        loading: false,
        users: action.payload,
        error: "",
      };

    default:
      return previousState;
  }
};

export default userReducer;

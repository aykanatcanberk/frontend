import { combineReducers } from "redux";
import userReducer from "./users/userReducer";
import postsReducer from "./posts/postReducer";



const rootReducer = combineReducers({
  userrrrr : userReducer,
  posts : postsReducer,
});

export default rootReducer;
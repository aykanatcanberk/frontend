import * as actionTypes from "../actions/actionType"
import initialState from "./initialState";

export default function shareAPostReducer(state=initialState.products,action){
    switch (action.type) {
        case actionTypes.ShareAPostAciton:
            return action.payload
        default:
            return state;
    }
}
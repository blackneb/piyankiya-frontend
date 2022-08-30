import { ActionTypes } from "../Constants/ActionTypes";
const initialState = {
    clothes:[],
}

export const clothesReducer = ( state = initialState, action ) => {
    switch(action.type){
        case ActionTypes.SET_CLOTHES:
            return {...state, clothes:action.payload};
        default:
            return state;
    }
}
import { ActionTypes } from "../Constants/ActionTypes";

export const set_clothes = (clothes) => {
    return{
        type: ActionTypes.SET_CLOTHES,
        payload: clothes,
}
}
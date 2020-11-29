import { USERDETAIL } from "./actionTypes";

const initialState = {
    userdetails: [],
};
export const mainReducer = (state = initialState, action: any) => {
    switch (action.type) {
        case USERDETAIL:
            return { ...state, userdetails: action.payload };

        default:
            return state;
    }
};

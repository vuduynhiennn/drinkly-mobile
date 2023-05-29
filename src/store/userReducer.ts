import { login, logout } from "./action";

export const USER_STATE_INIT = {
    displayName: "",
    email: "",
    photoURL: "",
    isLoggedIn: false
};

export const userReducer = (state: any, action: any) => {
    switch (action.type) {
        case login:
            const { email, displayName, photoURL } = action.payload
            state.displayName = displayName;
            state.email = email;
            state.photoURL = photoURL;
            state.isLoggedIn = true;
            
            return state

        case logout:
            state.displayName = "";
            state.email = "";
            state.photoURL = "";
            state.isLoggedIn = false
            return state

        default:
            throw new Error();
    }
};


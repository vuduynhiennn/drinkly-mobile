import data from '../../src/products.json'
import { addToFavorite } from './action';

export const PRODUCT_STATE_INIT = data

export const productReducer = (state: any, action: any) => {
    switch (action.type) {
        case "login":
            const { email, displayName, photoURL } = action.payload
            state.displayName = displayName;
            state.email = email;
            state.photoURL = photoURL;
            state.isLoggedIn = true;
            return state

        case "logout":
            state.displayName = "";
            state.email = "";
            state.photoURL = "";
            state.isLoggedIn = false
            return state

        case addToFavorite: 
            console.log(action.payload)            
            break;

        default:
            throw new Error();
    }
};


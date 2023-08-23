import {combineReducers} from "redux";
import {contactsReducer} from "src/redux/reducer/contactsReducer";
import {contactsGroupReducer} from "src/redux/reducer/contactsGroupReducer";
import {contactsFavoriteReducer} from "src/redux/reducer/contactsFavoriteReducer";




export const rootReducer = combineReducers({
    contactsReducer,
    contactsGroupReducer,
    contactsFavoriteReducer
})
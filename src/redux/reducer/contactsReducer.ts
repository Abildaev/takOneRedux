import {types} from "src/redux/types";
import {ContactDto} from "src/types/dto/ContactDto";
import {DATA_CONTACT} from "src/__data__";
import {contactsActionTypes} from "src/types/contacts";


export interface IInitialState {
    allContacts: ContactDto[],
    contacts: ContactDto[],
    oneContact: ContactDto | null
}

const initialState: IInitialState = {
    allContacts: DATA_CONTACT,
    contacts: DATA_CONTACT,
    oneContact: null
}



export function contactsReducer (state = initialState, action: contactsActionTypes) {
    switch (action.type) {
        case  types.FILTER_CONTACTS:
            return {...state, contacts: action.payload}

        case types.GET_ONE_CONTACT:
            return {...state, oneContact: action.payload}

        default: return state
    }
}






import {types} from "src/redux/types";
import {ContactDto} from "src/types/dto/ContactDto";
import {IFilterContactsActionCreator, IOneContactsActionCreator} from "src/types/contacts";


export function filterContactsActionCreator (contacts: ContactDto[]): IFilterContactsActionCreator {
    return {
        type: types.FILTER_CONTACTS,
        payload: contacts
    }
}


export function getOneContactActionCreator(contact: ContactDto): IOneContactsActionCreator {
    return  {
        type: types.GET_ONE_CONTACT,
        payload: contact
    }
}




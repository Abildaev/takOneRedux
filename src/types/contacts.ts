import {types} from "src/redux/types";
import {ContactDto} from "src/types/dto/ContactDto";


export interface IFilterContactsActionCreator {
    type: typeof types.FILTER_CONTACTS,
    payload: ContactDto[]
}

export interface IOneContactsActionCreator {
    type: typeof types.GET_ONE_CONTACT,
    payload: ContactDto
}



export type contactsActionTypes = IFilterContactsActionCreator | IOneContactsActionCreator
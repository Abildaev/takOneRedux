import {types} from "src/redux/types";
import {GroupContactsDto} from "src/types/dto/GroupContactsDto";
import {DATA_GROUP_CONTACT} from "src/__data__";
import {contactsGroupActionTypes} from "src/types/contactsGroup";
import {ContactDto} from "src/types/dto/ContactDto";


interface IInitialState {
    allContactsGroup: GroupContactsDto[],
    oneContactsGroup: GroupContactsDto | null,
    contacts: ContactDto[] | null
}

const initialState: IInitialState = {
    allContactsGroup: DATA_GROUP_CONTACT,
    oneContactsGroup: null,
    contacts: null
}

export function contactsGroupReducer (state = initialState, action: contactsGroupActionTypes) {
    switch (action.type) {
        case types.GET_ONE_CONTACT_GROUP:
            return  {...state, oneContactsGroup: action.payload}
        default: return state
    }
}
import {types} from "src/redux/types";
import {GroupContactsDto} from "src/types/dto/GroupContactsDto";



export interface IOneContactsGroupCreator {
    type: typeof  types.GET_ONE_CONTACT_GROUP,
    payload: GroupContactsDto
}



export type contactsGroupActionTypes = IOneContactsGroupCreator
import {types} from "src/redux/types";
import {GroupContactsDto} from "src/types/dto/GroupContactsDto";
import {IOneContactsGroupCreator} from "src/types/contactsGroup";





export function getOneContactGroupActionCreator (contactGroup: GroupContactsDto): IOneContactsGroupCreator {
    return  {
        type: types.GET_ONE_CONTACT_GROUP,
        payload: contactGroup
    }
}
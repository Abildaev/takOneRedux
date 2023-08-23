import {types} from "src/redux/types";
import {FavoriteContactsDto} from "src/types/dto/FavoriteContactsDto";
import {DATA_CONTACT} from "src/__data__";


interface IInitialState {
    favoriteContacts: FavoriteContactsDto
}


const initialState: IInitialState = {
    favoriteContacts: [
        DATA_CONTACT[0].id,
        DATA_CONTACT[1].id,
        DATA_CONTACT[2].id,
        DATA_CONTACT[3].id
    ]
}

export function contactsFavoriteReducer(state = initialState) {
    return state
}
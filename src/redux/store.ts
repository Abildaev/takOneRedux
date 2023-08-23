import {createStore} from "redux";
import {rootReducer} from "src/redux/reducer";



export const store = createStore(rootReducer);

export type RootState = ReturnType<typeof store.getState>
export type AppDispatch = typeof store.dispatch
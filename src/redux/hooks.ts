import {TypedUseSelectorHook, useDispatch, useSelector} from "react-redux";
import {RootState} from "src/redux/store";
import {AppDispatch} from "src/redux/store";




export const useAppDispatch: () => AppDispatch = useDispatch
export const useAppSelector: TypedUseSelectorHook<RootState> = useSelector
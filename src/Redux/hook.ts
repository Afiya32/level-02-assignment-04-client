 //src/redux/hook.ts
import {useDispatch,useSelector} from 'react-redux'
import type {TypedUseSelectorHook} from 'react-redux'
import { AppDispatch, RootState } from './Features/store';


export const useAppDispatch:() =>AppDispatch=useDispatch;
export const useAppSelector:TypedUseSelectorHook<RootState>=useSelector;
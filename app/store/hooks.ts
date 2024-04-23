import { TypedUseSelectorHook, useDispatch, useSelector } from 'react-redux'
import type { ThunkDispatch, UnknownAction } from '@reduxjs/toolkit'

import type { RootState, AppDispatch } from './store'

export const useAppDispatch = () => useDispatch<AppDispatch>()
export const useAppSelector: TypedUseSelectorHook<RootState> = useSelector
export const useThunkDispatch: () => ThunkDispatch<
  RootState,
  null,
  UnknownAction
> = useDispatch

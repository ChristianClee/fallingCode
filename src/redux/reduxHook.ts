import {useMemo} from 'react'
import { useDispatch, useSelector } from 'react-redux'
import type { AppDispatch, RootState } from './store'
import { bindActionCreators } from '@reduxjs/toolkit'
import { actions as dataClock } from './slices/clockSlice'      // data
import { actions as rectangleClock } from './slices/rectangleSlice'
export const useAppDispatch: () => AppDispatch = useDispatch

  const rootActions = {
    ...dataClock,                                             // data
    ...rectangleClock,
}

export const useActions = () => {
  const dispatch = useAppDispatch()
  return useMemo(() => 
    bindActionCreators(rootActions, dispatch )
  ,[dispatch])
}
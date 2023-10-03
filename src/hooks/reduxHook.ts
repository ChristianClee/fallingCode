import {useMemo} from 'react'
import { useDispatch, useSelector } from 'react-redux'
import type { AppDispatch, RootState } from '../redux/store'
import { bindActionCreators } from '@reduxjs/toolkit'
import { actions as dataClock } from '../redux/slices/clockSlice'      // data
import { actions as rectangleClock } from '../redux/slices/rectangleSlice'
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
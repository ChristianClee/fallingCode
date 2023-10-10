import {useMemo} from 'react'
import { useDispatch, useSelector } from 'react-redux'
import type { AppDispatch, RootState } from '../redux/store'
import { bindActionCreators } from '@reduxjs/toolkit'
import { actions as fallingCode } from '../redux/slices/fallingCode'
export const useAppDispatch: () => AppDispatch = useDispatch

  const rootActions = {
    ...fallingCode,
}

export const useActions = () => {
  const dispatch = useAppDispatch()
  return useMemo(() => 
    bindActionCreators(rootActions, dispatch )
  ,[dispatch])
}
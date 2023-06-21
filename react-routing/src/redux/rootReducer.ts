import { combineReducers } from '@reduxjs/toolkit'
import countSlice from './countSlice'

export const rootReducer = combineReducers({
  count: countSlice,
})

export type RootState = ReturnType<typeof rootReducer>

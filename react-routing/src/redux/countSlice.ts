import { createSlice } from '@reduxjs/toolkit'

const countSlice = createSlice({
  name: 'count',
  initialState: 0,
  reducers: {
    incrementCount: (state) => {
      return state + 1
    },
    decrementCount: (state) => {
      return state - 1
    },
    resetCount: (state) => {
      return (state = 0)
    },
  },
})

export const { incrementCount, decrementCount, resetCount } = countSlice.actions
export default countSlice.reducer

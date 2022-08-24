import { createSlice } from '@reduxjs/toolkit'



const currentSlice = createSlice({
  name: 'current',
  initialState: { data: null },
  reducers: {
    set: (slice, props) => {
      slice.data = props.payload.data
    }
  }
})



export const currentSliceReducer = currentSlice.reducer
export const currentSliceActions = currentSlice.actions
export default currentSlice
import { createSlice } from '@reduxjs/toolkit'



const initialSlice = createSlice({
  name: 'initial',
  initialState: {
    fetch: {
      list: null
    }
  },
  reducers: {
    fetchListHandler: (slice, props) => {
      if(props.payload && props.payload.status === false) {
        slice.fetch.list = false
        return
      }
      slice.fetch.list = true
    }
  }
})



export const initialSliceReducer = initialSlice.reducer
export const initialSliceActions = initialSlice.actions
export default initialSlice
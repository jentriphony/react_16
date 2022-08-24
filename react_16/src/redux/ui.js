import { createSlice } from '@reduxjs/toolkit'



const uiSlice = createSlice({
  name: 'ui',
  initialState: {
    theme: 'dark',
    layoutHeaderNotification: {
      visible: null,
      status: null,
      message: null
    }
  },
  reducers: {
    themeHandler: slice => {
      slice.theme === 'dark' ? slice.theme = 'light' : slice.theme = 'dark'
      if(slice.theme === 'dark') {
        document.body.style.background = 'rgba(0, 0, 0, 0.8)'
        document.body.style.color = 'white'

        document.getElementById('theme').style.background = 'black'
        document.getElementById('theme').style.borderColor = 'white'
        return
      }
      document.body.style.background = 'rgba(255, 255, 255, 0.8)'
      document.body.style.color = 'black'
      document.getElementById('theme').style.background = 'white'
      document.getElementById('theme').style.borderColor = 'black'
    },
    layoutHeaderNotificationHandler: (slice, props) => {
      if(props.payload.visible === false) {
        slice.visible = false
        return
      }
      slice.status = props.payload.status
      slice.message = props.payload.message
      slice.visble !== true && (slice.visible = true)
    }
  }
})



export const uiSliceReducer = uiSlice.reducer
export const uiSliceActions = uiSlice.actions
export default uiSlice
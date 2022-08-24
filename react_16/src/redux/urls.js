import { createSlice } from '@reduxjs/toolkit'



const urlsSlice = createSlice({
  name: 'urls',
  initialState: {
    domain: {
      pages: {
        home: {
          name: 'home',
          url: '/home',
          children: null
        },
        list: {
          name: 'list',
          url: '/list',
          children: {
            item: {
              name: 'item',
              url: '/item',
              children: null
            }
          }
        }
      }
    },
    fetch: {
      list: 'http://localhost:8000/api/list'
    }
  }
})



export const urlsSliceReducer = urlsSlice.reducer
export const urlsSliceActions = urlsSlice.actions
export default urlsSlice
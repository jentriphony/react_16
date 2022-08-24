import { configureStore } from '@reduxjs/toolkit'
import { initialSliceReducer } from './initial'
import { currentSliceReducer } from './pages/current'
import { urlsSliceReducer } from './urls'
import { uiSliceReducer } from './ui'
// import { homeSliceReducer } from './pages/home'
import { listSliceReducer } from './pages/list'



const store = configureStore({
  reducer: {
    initial: initialSliceReducer,
    current: currentSliceReducer,
    urls: urlsSliceReducer,
    ui: uiSliceReducer,
    // home: homeSliceReducer,
    list: listSliceReducer
  }
})



export default store
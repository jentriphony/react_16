import { createSlice } from '@reduxjs/toolkit'
import { initialSliceActions } from './../initial'
import urlsSlice from './../urls'
import { uiSliceActions } from './../ui'



const listSlice = createSlice({
  name: 'list-page',
  initialState: { list: [] },
  reducers: {
    set: (slice, props) => {
      slice.list = props.payload.data || []
    },
    ignore: () => {}
  }
})

export const fetchAction = props => {
  return async dispatch => {
    const startHandler = () => dispatch(uiSliceActions.layoutHeaderNotificationHandler({
      status: 'loading',
      message: 'fetch_list'
    }))
    const successHandler = () => dispatch(uiSliceActions.layoutHeaderNotificationHandler({
      status: 'success',
      message: 'fetch_list'
    }))
    const errorHandler = () => dispatch(uiSliceActions.layoutHeaderNotificationHandler({
      status: 'error',
      message: 'fetch_list'
    }))
    const finishHandler = () => {}
    const data = await props.handler({
      onStart: startHandler,
      url: urlsSlice.getInitialState().fetch.list,
      configuration: props.configuration,
      dataTail: props.dataTail,
      onSuccess: successHandler,
      onError: errorHandler,
      onFinish: finishHandler
    })
    dispatch(initialSliceActions.fetchListHandler())
    return dispatch(listSlice.actions[props.actionName]({
      props: props.actionProps,
      data
    }))
  }
}



export const listSliceReducer = listSlice.reducer
export const listSliceActions = listSlice.actions
export default listSlice
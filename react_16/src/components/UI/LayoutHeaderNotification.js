import classes from './LayoutHeaderNotification.module.css'

import { useCallback, Fragment } from 'react'
import { useSelector, useDispatch } from 'react-redux'
import { uiSliceActions } from './../../redux/ui'
import useClickAway from './../../hooks/click-away'
import LoadingSpinner from './LoadingSpinner'



const LayoutHeaderNotification = () => {



  const slice = useSelector(store => store.ui)



  const dispatch = useDispatch()



  const closeHandler = useCallback(() => dispatch(uiSliceActions.layoutHeaderNotificationHandler({ visible: false })), [dispatch])



  useClickAway({
    visibilityHandler: closeHandler,
    visible: { status: slice.visible }
  })
  
  
  return (

    <Fragment>



      { slice.visible && (
        <section className={ classes.notification }>
          <span className={ classes.status }>
            { slice.status }
          </span>
          
          { slice.status === 'loading' && (
            <LoadingSpinner />
          ) }

          <span className={ classes.message }>
            { slice.message }
          </span>

          <button
            className={ classes['close-button'] }
            type='button'
            onClick={ closeHandler }
          >
            x
          </button>
        </section>
      ) }



    </Fragment>

  )



}



export default LayoutHeaderNotification
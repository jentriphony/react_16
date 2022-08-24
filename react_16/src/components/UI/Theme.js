import classes from './Theme.module.css'

import { useDispatch } from 'react-redux'
import { uiSliceActions } from './../../redux/ui'



const Theme = () => {
  
  

  const dispatch = useDispatch()



  const clickHandler = () => dispatch(uiSliceActions.themeHandler())


  return (

    <div
      className={ classes.theme }
      type='button'
      id='theme'
      onClick={ clickHandler }
    ></div>

  )



}



export default Theme
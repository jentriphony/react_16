import classes from './Header.module.css'

import { Fragment } from 'react'
import Theme from './../../UI/Theme'
import Navigation from './Navigation/Navigation'
import Notification from './../../UI/LayoutHeaderNotification'



const Header = () => {


  
  return (

    <Fragment>



      <header className={ classes.header }>
        <Theme />

        <Navigation />
      </header>

      <Notification />



    </Fragment>

  )



}



export default Header
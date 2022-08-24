import { Fragment } from 'react'
import Header from './Header/Header'



const Layout = dataProps => {



  return (

    <Fragment>



      <Header />

      { dataProps.children }



    </Fragment>

  )



}



export default Layout
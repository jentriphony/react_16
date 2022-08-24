import classes from './../css/Home/Home.module.css'

import { Fragment } from 'react'
import { useSelector } from 'react-redux'
import { Route } from 'react-router-dom'
import Home from './../../components/Home/Home'
import Room from './../../components/Home/Room/Page'



const HomePage = () => {



  const urlsSlice = useSelector(store => store.urls)
  
  
  return (

    <Fragment>



      <Route path={ urlsSlice.domain.pages.home.url } exact>
        <Home />
      </Route>
      
      <Route path='/home/room/:id'>
        <Room />
      </Route>



    </Fragment>

  )



}



export default HomePage
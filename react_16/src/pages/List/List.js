import classes from './../css/List/List.module.css'

import { Fragment } from 'react'
import { useSelector } from 'react-redux'
import { Route, Switch } from 'react-router-dom'
import List from './../../components/List/List'
import Item from './Item/Item'



const ListPage = () => {

  
  
  const urlsSlice = useSelector(store => store.urls)
  
  
  return (

    <Fragment>


      <Switch>
        <Route exact path={ urlsSlice.domain.pages.list.url }>
          <List />
        </Route>

        <Route path={ `${ urlsSlice.domain.pages.list.url }${ urlsSlice.domain.pages.list.children.item.url }/:id` }>
          <Item />
        </Route>
      </Switch>



    </Fragment>

  )



}



export default ListPage
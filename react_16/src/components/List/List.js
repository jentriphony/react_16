import classes from './List.module.css'

import { useContext, useEffect } from 'react'
import { useSelector, useDispatch } from 'react-redux'
import FetchContext from './../../context/fetch'
import { fetchAction } from './../../redux/pages/list'
import Item from './Item/Item'



const List = () => {



  const fetchContext = useContext(FetchContext)



  const initialSlice = useSelector(store => store.initial)

  const slice = useSelector(store => store.list)
  
  
  
  const dispatch = useDispatch()



  useEffect(() => {

    if(initialSlice.fetch.list) return
    dispatch(fetchAction({
      handler: fetchContext.handler,
      dataTail: 'data',
      actionName: 'set'
    }))
    

  }, [initialSlice.fetch.list, dispatch, fetchContext.handler])

  const DOM = (
    <ul>
      { slice.list.map(item => (
        <Item key={ `list_item_${ item.id }` } item={ item } />
      )) }
    </ul>
  )
  
  
  return (

    <section className={ classes.list }>



      { DOM }



    </section>

  )



}



export default List
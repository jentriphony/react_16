import classes from './Page.module.css'

import {
  useState,
  useContext,
  useEffect,
  Fragment
} from 'react'
import FetchContext from './../../../context/fetch'
import { useSelector, useDispatch } from 'react-redux'
import { fetchAction as listSliceFetchAction } from './../../../redux/pages/list'
import { useParams } from 'react-router-dom'
// import LoadingSpinner from './../../UI/LoadingSpinner'



const Page = () => {


  
  const fetchContext = useContext(FetchContext)
  
  
  
  const initialSlice = useSelector(store => store.initial)

  const listSlice = useSelector(store => store.list)



  const dispatch = useDispatch()



  const routeParams = useParams()



  const [item, setItem] = useState(listSlice.list ? listSlice.list.find(item => item.id === routeParams.id) : null)



  useEffect(() => {

    if(initialSlice.fetch.list && !item) {
      setItem(listSlice.list.find(itemProp => itemProp.id === routeParams.id) || listSlice.list[Math.floor((100 * Math.random()) % 4)])
      return
    }
    if(initialSlice.fetch.list) return
    dispatch(listSliceFetchAction({
      handler: fetchContext.handler,
      dataTail: 'data',
      actionName: 'set'
    }))

  }, [
    initialSlice.fetch.list,
    item,
    listSlice.list,
    routeParams.id,
    dispatch,
    fetchContext.handler
  ])


  return (

    <section className={ classes.item }>



      { item && (
        <Fragment>
          <div className={ classes.information }>
            <div className={ classes.group }>
              <span>{ item.title }</span>

              <span>{ item.price }</span>
            </div>

            <span className={ classes.description }>
              { item.description }
            </span>
          </div>

          <div className={ classes['information-verbose'] }>
            <span>description_verbose</span>
          </div>
        </Fragment>
      ) }
      {/* ) : (
        <div className={ classes.spinner }>
          <LoadingSpinner />
        </div>
      ) } */}




    </section>

  )



}



export default Page
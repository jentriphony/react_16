import classes from './Item.module.css'

import {
  useState,
  useContext,
  useEffect,
  Fragment
} from 'react'
import UrlContext from './../../../context/url'
import { useSelector, useDispatch } from 'react-redux'
import { currentSliceActions } from './../../../redux/pages/current'
import { Link } from 'react-router-dom'



const Item = props => {



  const [pageFullUrl, setPageFullUrl] = useState(null)
  
  
  
  const urlContext = useContext(UrlContext)
  
  
    
  const urlsSlice = useSelector(store => store.urls)
  
  
  
  const dispatch = useDispatch()



  const titleClickHandler = () => dispatch(currentSliceActions.set({ data: props.item }))



  useEffect(() => {

    const pageFullUrlTmp = { url: null }
    urlContext.fullUrlHandler(
      { url: '/item' },
      pageFullUrlTmp,
      urlsSlice.domain.pages.list,
      urlsSlice.domain.pages.list.url,
      { finished: false }
    )
    setPageFullUrl(`${ pageFullUrlTmp.url }/${ props.item.id }`)

  }, [
    urlContext,
    urlsSlice.domain.pages.list,
    urlsSlice.domain.pages.list.url,
    props.item.id
  ])
  
  
  return (

    <li className={ classes.item }>



      { props.item && (
        <Fragment>
          <div className={ classes.group }>
            <Link to={ pageFullUrl || '' } onClick={ titleClickHandler }>
              <span>{ props.item.title }</span>
            </Link>

            <span>{ props.item.description }</span>
          </div>

          <div className={ classes.actions }>
            <span>{ props.item.price }</span>
            <button type='button'>
              add
            </button>
          </div>
        </Fragment>
      ) }



    </li>

  )



}



export default Item
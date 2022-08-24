import classes from './Navigation.module.css'

import { useState, useCallback } from 'react'
import { useSelector } from 'react-redux'
// import Link from './Link/Link'
import { NavLink } from 'react-router-dom'
import useClickAway from './../../../../hooks/click-away'



const Navigation = () => {


  
  const [id,] = useState('header_navigation_domain_pages_urls_dom')

  const [visible, setVisible] = useState({ status: null })
  
  

  const urlsSlice = useSelector(store => store.urls)



  const visibilityHandler = useCallback(() => setVisible(state => {
    const result = JSON.parse(JSON.stringify(state))
    result.status = !result.status
    return result
  }), [])


  useClickAway({
    visibilityHandler,
    visible,
    id
  })

  const domainPagesUrlsDOM = (
    <ul className={ classes.dropdown }>
      { Object.keys(urlsSlice.domain.pages).map(domainPageUrlKey => (
        <li key={ `header_domain_page_link_${ urlsSlice.domain.pages[domainPageUrlKey].name }` }>
          <NavLink
            activeClassName={ classes.active }
            id={ id }
            to={ urlsSlice.domain.pages[domainPageUrlKey].url }
            exact
          >
            { urlsSlice.domain.pages[domainPageUrlKey].name }
          </NavLink>
          {/* <Link href={ domainPageUrl.url } innerText={ domainPageUrl.name } /> */}
        </li>
      )) }
    </ul>
  )
  
  
  return (

    <nav className={ classes.navigation }>



      <button
        className={ classes['navigation-button'] }
        type='button'
        onClick={ visibilityHandler }
      ></button>

      { visible.status && domainPagesUrlsDOM }



    </nav>

  )



}



export default Navigation
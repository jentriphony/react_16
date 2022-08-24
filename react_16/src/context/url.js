import { createContext } from 'react'



const UrlContext = createContext()



export const UrlContextProvider = props => {


  
  const fullUrlHandler = (
    targetUrl,
    result,
    currentUrl,
    currentFullUrl,
    status
  ) => {

    if(status.finished) return
    if(currentUrl.url === targetUrl.url) {
      result.url = currentFullUrl
      status.finished = true
      return
    }
    for(const [, value] of Object.entries(currentUrl.children)) {
      if(value.url === targetUrl.url) {
        result.url = currentFullUrl + value.url
        status.finished = true
        return
      }
      if(value.children)
        fullUrlHandler(
          targetUrl,
          result,
          value.children,
          currentFullUrl + value.url,
          status
        )
    }

  }


  return (

    <UrlContext.Provider value={ { fullUrlHandler } }>



      { props.children }



    </UrlContext.Provider>

  )



}



export default UrlContext
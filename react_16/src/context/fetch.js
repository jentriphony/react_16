import { createContext } from 'react'



const FetchContext = createContext()

export const FetchContextProvider = props => {



  const handler = async handlerProps => {

    handlerProps.onStart && handlerProps.onStart(handlerProps.onStartProps)
    try {
      const response = await fetch(handlerProps.url, handlerProps.configuration)
      if(!response.ok) throw new Error('error_fetch')
      let data = await response.json()
      if(handlerProps.dataTail) {
        const dataTailArray = handlerProps.dataTail.split('.')
        for(let iterator = 0; iterator < dataTailArray.length; ++ iterator)
          data = data[dataTailArray[iterator]]
      }
      handlerProps.onSuccess && handlerProps.onSuccess({
        props: handlerProps.onSuccessProps,
        data
      })
      handlerProps.onFinish && handlerProps.onFinish({
        props: handlerProps.onFinishProps,
        data
      })
      return data
    } catch(error) {
      handlerProps.onError && handlerProps.onError({
        props: handlerProps.onErrorProps,
        error
      })
      handlerProps.onFinish && handlerProps.onFinish({
        props: handlerProps.onFinishProps,
        error
      })
      return error
    }

  }


  return (

    <FetchContext.Provider value={ { handler } }>



      { props.children }



    </FetchContext.Provider>

  )



}



export default FetchContext
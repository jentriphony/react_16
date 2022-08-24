import {
  useState,
  useCallback,
  useEffect
} from 'react'



const useClickAway = props => {



  const [listenerActive, setListenerActive] = useState(null)

  const [componentDependencies,] = useState({
    visibilityHandler: props.visibilityHandler,
    id: props.id
  })
  

  
  const clickAwayHandler = useCallback(event => (componentDependencies.id ? event.target.id !== componentDependencies.id && event.target.type !== 'button' : event.target.type !== 'button') && componentDependencies.visibilityHandler(), [componentDependencies])
  


  useEffect(() => {

    if(props.visible.status && !listenerActive) {
      document.addEventListener('click', clickAwayHandler)
      setListenerActive(true)
      return
    }
    if(!props.visible.status && listenerActive) {
      document.removeEventListener('click', clickAwayHandler)
      setListenerActive(false)
    }

  }, [props.visible.status, listenerActive, clickAwayHandler])



}



export default useClickAway
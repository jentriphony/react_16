import classes from './Link.module.css'



const Link = props => {



  const clickHandler = event => {

    event.preventDefault()
    window.history.pushState(null, null, props.href)

  }
  
  
  return (

    <a
      className={ classes.link }
      href={ props.href }
      onClick={ clickHandler }
    >



      { props.innerText }



    </a>

  )



}



export default Link
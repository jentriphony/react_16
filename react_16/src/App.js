import classes from './App.module.css'

import { Route, Redirect } from 'react-router-dom'
// import { Switch } from 'react-router-dom'
import Layout from './components/Layout/Layout'
import Home from './pages/Home/Home'
import List from './pages/List/List'



function App() {
  
    
  
  return (

    <Layout>



      <Route exact path='/'>
        <Redirect to='/home' />
      </Route>

      <main className={ classes.app }>
        <Home />

        <List />
      </main>



    </Layout>

  )



}



export default App

// domain.com/      => component A
// domain.com/list  => component B
import './index.css'

import React from 'react'
import ReactDOM from 'react-dom/client'
import { UrlContextProvider } from './context/url'
import { FetchContextProvider } from './context/fetch'
import { Provider } from 'react-redux'
import store from './redux/index'
import { BrowserRouter } from 'react-router-dom'
import App from './App'

const root = ReactDOM.createRoot(document.getElementById('root'))

root.render(

  // <React.StrictMode>


    <UrlContextProvider>
      <FetchContextProvider>
        <Provider store={ store }>
          <BrowserRouter>
            <App />
          </BrowserRouter>
        </Provider>
      </FetchContextProvider>
    </UrlContextProvider>



  // </React.StrictMode>
)
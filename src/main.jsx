import { StrictMode, useRef } from 'react'
import { createRoot } from 'react-dom/client'
import './index.css'
import { Store } from './store/Store.js'
import { Provider } from 'react-redux'

import { BrowserRouter } from 'react-router-dom'
import AppStructure from './AppStructure.jsx'
import App from './App.jsx'



createRoot(document.getElementById('root')).render(
  <Provider store={Store}>
    <StrictMode>
      <BrowserRouter>
        {/* <AppStructure /> */}
        <App />
      </BrowserRouter>

    </StrictMode>,
  </Provider>
)

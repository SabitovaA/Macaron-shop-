import React from 'react'
import ReactDOM from 'react-dom/client'
import App from './App.jsx'
import './index.css'
import { BrowserRouter } from 'react-router-dom'
import { Provider } from 'react-redux'
//import { store } from './redux/store.js'
import { PersistGate } from 'redux-persist/integration/react'
import store, { persistor } from './redux/store.js'
//import store from './redux/store.js'

ReactDOM.createRoot(document.getElementById('root')).render(
  <BrowserRouter>
     <Provider store={store}>
       <PersistGate persistor={persistor}>
          <App />
       </PersistGate>
     </Provider>
  </BrowserRouter>  
)

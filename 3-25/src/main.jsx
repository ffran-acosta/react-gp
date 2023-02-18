import React from 'react'
import ReactDOM from 'react-dom/client'
import UseEffectUseRef from './UseEffectUseRef'
import './index.css'
import UseMemo from './UseMemo'

ReactDOM.createRoot(document.getElementById('root')).render(
  <React.StrictMode>
    <UseEffectUseRef />
    <UseMemo />
  </React.StrictMode>,
)

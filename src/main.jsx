import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import { GlobalStyle } from './styles/stylesGlobal.js'
import { RouterProvider } from 'react-router-dom'
import Route from './routes.jsx'

createRoot(document.getElementById('root')).render(
  <StrictMode>
    <GlobalStyle />
    <RouterProvider router={Route} />
  </StrictMode>,
)

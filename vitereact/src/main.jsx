import React,{ StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import './index.css'
import App from './App.jsx'
import Ex1 from './Ex1.jsx'

// const anotherElement = (
//   <a href="https://google.com" target="_blank">Visit Google</a>
// )

// createRoot(document.getElementById('root')).render(
//   anotherElement
// )

// const anotherUser = "Ayush"

// const reactElement = React.createElement(
//   'a',
//   {
//     href: 'https://google.com',
//     target: '_blank',
//   },
//   "Visit Google - ",anotherUser
// )

// createRoot(document.getElementById('root')).render(
//   reactElement
// )

createRoot(document.getElementById('root')).render(
  <StrictMode>
    {/* <App /> */}
    <Ex1 />
  </StrictMode>
)
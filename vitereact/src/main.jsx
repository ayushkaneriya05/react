import React,{ StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import './index.css'
import App from './App.jsx'
import Ex1 from './Ex1.jsx'
import Counter from './Counter.jsx'

createRoot(document.getElementById('root')).render(
  <StrictMode>
    {/* <App /> */}
    <Ex1 />
    {/* <Counter /> */}
  </StrictMode>
)

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
// console.log(reactElement);

// createRoot(document.getElementById('root')).render(
//   reactElement
// )

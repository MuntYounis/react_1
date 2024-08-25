import { useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import './App.css'
import Nav from './Nav.jsx'
import Employees from './Employees.jsx'
import Clients from './Clients.jsx'
import Footer from './Footer.jsx'
export default function App() {
  return<div> 
      <Nav/>
      <Employees/>
      <Clients/>
      <Footer/>
    </div>
}


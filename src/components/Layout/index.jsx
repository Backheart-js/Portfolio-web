import './index.scss'
import React from 'react'
import Sidebar from '../Sidebar';
import { Outlet, Route, Router } from 'react-router-dom';
import Home from '../Home';

function Layout() {
  return (
    <div id="layout">
      <Sidebar></Sidebar>
      
      <div className="page">
        <Outlet/>
      </div>
    </div>
  )
}

export default Layout;
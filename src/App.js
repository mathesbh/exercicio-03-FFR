import React from "react";
import { Link } from 'react-router-dom'
import { ApplicationRoutes } from "./ApplicationRoutes";

export default function App() {
  
  return (
    <div className="container">
      <nav>
        <ul>
          <li><Link to='/'>Home</Link></li>
          <li><Link to='/movies'>Movies</Link></li>
        </ul>
      </nav>
      <ApplicationRoutes />
    </div>
  )
}

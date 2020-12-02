import React from "react";
import { Link } from 'react-router-dom'
import { ApplicationRoutes } from "./ApplicationRoutes";

export default function App() {
  
  return (
    <div className="container">
      <nav>
        <ul>
          <li><Link to='/'>Home</Link></li>
          <li><Link to='/movies'>Popular Movies</Link></li>
          <li><Link to='/playlists'>Favorites Movies List</Link></li>
        </ul>
      </nav>
      <ApplicationRoutes />
    </div>
  )
}

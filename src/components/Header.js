import React, { useContext } from 'react';
import { Link } from 'react-router-dom';
import { ArtistsContext } from '../context/ArtistsContext';


export const Header = ()=>{

  const {token, AUTH_ENDPOINT, CLIENT_ID, REDIRECT_URI, RESPONSE_TYPE, logout} = useContext(ArtistsContext)  

  return(
    <nav className="navbar navbar-light bg-light">
      <div className="container-fluid">
        <span className="navbar-brand mb-0 h1">My Spotify</span>      
        <div className="me-auto">
          <Link className="btn btn-secondary" to='/'>Home</Link> 
        </div>
        {!token ?        
        <a className="btn btn-outline-dark" href={`${AUTH_ENDPOINT}?client_id=${CLIENT_ID}&redirect_uri=${REDIRECT_URI}&response_type=${RESPONSE_TYPE}`}>Login to Spotify</a>
        : <button type="button" className="btn btn-outline-dark" onClick={logout}>Logout</button>}   
      </div>
    </nav>
  )
} 

import React from 'react';

export const Header = ({token, AUTH_ENDPOINT, CLIENT_ID, REDIRECT_URI, RESPONSE_TYPE, logout})=>{
  return(
    <nav className="navbar navbar-light bg-light">
      <div className="container-fluid">
        <a className="navbar-brand">My Spotify</a>
        {!token ?        
        <a className="btn btn-outline-dark" href={`${AUTH_ENDPOINT}?client_id=${CLIENT_ID}&redirect_uri=${REDIRECT_URI}&response_type=${RESPONSE_TYPE}`}>Login to Spotify</a>
        : <button type="button" className="btn btn-outline-dark me-0" onClick={logout}>Logout</button>}   
      </div>
    </nav>
  )
} 
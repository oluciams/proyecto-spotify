import React, { useContext } from 'react';
import { Link } from 'react-router-dom';
import { ArtistsContext } from '../context/ArtistsContext';


export const ListArtists = ({images, nameArtist, followers})=>{

  const {artists, searchAlbums} = useContext(ArtistsContext)

  if(!artists) return <h3 className="App">Loading . . .  </h3>

  return( 
    <div className="mt-3 mx-auto">
      <div className="card h-100" style={{width: "18rem"}}>
        {images.length ? <img src={images[0].url} className="h-100 w-100" alt="artist"/> : <img className="h-100 w-100" alt="No Artist"/>}     
        <div className="card-body">
          <h5 className="card-title">{nameArtist}</h5>
          <p>Followers: {followers.total}</p> 
          <Link to="/albums" type="button" className="btn btn-info" onClick={searchAlbums}>albums</Link>
        </div>
      </div>   
    </div>        
  )
}

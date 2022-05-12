import React from 'react';
import { DetailArtist } from './DetailArtist';

export const ListArtits = ({images, nameArtist, followers, searchAlbums, albums})=>{

  return( 
    <div className="mt-3 mx-auto">
      <div className="card h-100" style={{width: "18rem"}}>
        {images.length ? <img src={images[0].url} className="h-100 w-100" alt="artist"/> : <img className="h-100 w-100" alt="No Image"/>}     
        <div className="card-body">
          <h5 className="card-title">{nameArtist}</h5>
          <p>Followers: {followers.total}</p>           
          <button type="button" className="btn btn-info" onClick={searchAlbums} data-bs-toggle="modal" data-bs-target="#staticBackdrop">
            Albums</button>
            {albums.map(({id, images, name, external_urls})=>
              <DetailArtist
                key={id}
                id={id}
                nameArtist={nameArtist}
                images={images}
                nameAlbum={name}
                url={external_urls}               
              />      
              )
            }
        </div>
      </div>   
    </div>        
  )
}

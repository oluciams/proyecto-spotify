import React from 'react';

export const ListArtits = ({images, nameArtist})=>{
  return( 
    <div className="mt-3">
      <div className="card h-100" style={{width: "18rem"}}>
        {images.length ? <img src={images[0].url} className="h-100 w-100" alt="artist"/> : <div>No image</div>}     
        <div className="card-body">
          <h5 className="card-title">{nameArtist}</h5>        
          <button href="#" className="btn btn-primary">Details</button>
        </div>
      </div>   
    </div>        
  )
}

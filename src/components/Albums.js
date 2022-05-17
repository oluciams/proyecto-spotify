import React, { useContext } from 'react';
import { ArtistsContext } from '../context/ArtistsContext';


export const Albums = ()=>{
  
  const {albums} = useContext(ArtistsContext)

  if(!albums) return <h3>Loading . . . </h3>

  return(
    <>

    {albums.map(({id, images, name, href})=> 
                        
               
      <p> nombre: {name}</p>
    )
}
    </>

    // <div className="mt-3 mx-auto">
    //     <div className="card h-100" style={{width: "18rem"}}>
    //       {images.length ? <img src={images[1].url} className="h-100 w-100" alt="album"/> : <img className="h-100 w-100" alt="No Artist"/>}     
    //       <div className="card-body">
    //         <h5 className="card-title">Album: {nameAlbum}</h5>
    //         <p>Artista: {nameArtist}</p>
    //         <a href={url} class="btn btn-primary">Go albums</a>            
    //       </div>
    //     </div>   
    // </div>        
  
  )
}

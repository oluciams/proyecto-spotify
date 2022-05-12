import React from 'react';

export const DetailArtist = ({id,nameArtist, images, nameAlbum, external_urls, href})=>{

  //if(!albums) return <h3>Loading . . . </h3>

  return(

    <div className="mt-3 mx-auto">
        <div className="card h-100" style={{width: "18rem"}}>
          {images.length ? <img src={images[0].url} className="h-100 w-100" alt="album"/> : <img className="h-100 w-100" alt="No Artist"/>}     
          <div className="card-body">
            <h5 className="card-title">Album: {nameAlbum}</h5>
            <p>Artista: {nameArtist}</p>
            <a href={external_urls} class="btn btn-primary">Go Album</a>          
            
              {/* {albums.map(({id, images, name, external_urls})=>
                <DetailArtist
                  key={id}
                  id={id}
                  nameArtist={nameArtist}
                  images={images}
                  nameAlbum={name}
                  url={external_urls}               
                />      
                )
              } */}
          </div>
        </div>   
    </div>        
  
  )
}
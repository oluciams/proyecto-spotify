import React, { useContext } from 'react';
import { ArtistsContext } from '../context/ArtistsContext';


export const Albums = ()=>{
  
  const {albums} = useContext(ArtistsContext)

  if(!albums) return <h3 className="App">Loading . . . </h3>

  return(  
    <div className="container">
      <section className="row justify-content-sm center row-cols-auto">

        { albums.map(({id, images, name, href, artists})=> 
            <div key={id} className="mt-3 mx-auto">
              <div  className="card h-100" style={{width: "18rem"}}>
                {images.length ? <img src={images[1].url} className="h-100 w-100" alt="album"/> : <img className="h-100 w-100" alt="No Artist"/>}     
                <div className="card-body">
                  <h5 className="card-title">Album: {name}</h5>
                  <p>Artista: {artists[0].name}</p>
                  <a href={href} className="btn btn-primary">Go albums</a>            
                </div>
              </div>   
            </div> 
          )
        }
      </section> 
    </div>
  )
}

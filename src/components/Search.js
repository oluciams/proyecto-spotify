import React, { useContext } from 'react';
import { ArtistsContext } from '../context/ArtistsContext';
import { ListArtists } from './ListArtists';

export const Search = ()=>{

  const {searchArtists, setSearchKey, artists} = useContext(ArtistsContext)

  return(
    <div className="container">
      <section className="col-4 mt-3">                
        <form className="d-flex" onSubmit={searchArtists}>         
          <input className="form-control me-2" type="search" onChange={e => setSearchKey(e.target.value)} placeholder="Search" aria-label="Search"/>
          <button className="btn btn-outline-secondary" type="submit">Search</button>
        </form>         
      </section>       
      <h2 className="App">Your Results</h2> 

      <section className="row justify-content-sm center row-cols-auto">
          {artists.map(({id, images, name, followers})=>  
            <ListArtists
              key={id}
              id={id}
              images={images}          
              nameArtist={name}
              followers={followers}    
            />
            )
          }          
      </section>    
    </div>
  )
}



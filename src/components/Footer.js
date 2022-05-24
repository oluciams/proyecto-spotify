import React, { useContext } from 'react';
import { ArtistsContext } from '../context/ArtistsContext';

export const Footer = ()=> {

  const {onChangePage, page, totalPages} = useContext(ArtistsContext)
  
  return(

    <footer className="container mt-3 mb-3">
      <button type="button" className="btn btn-secondary btn-lg me-3" onClick={()=> onChangePage(-1)}>Prev</button>  | {page}     de   {totalPages} |
      <button type="button" className="btn btn-secondary btn-lg ms-3" onClick={()=> onChangePage(1)}>Next</button>   
    </footer> 
          
  )
}
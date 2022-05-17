import React from 'react';

export const Footer = ()=> {
  return(

    <footer className="mt-3 mb-3">
      <button type="button" className="btn btn-secondary btn-lg me-3" onClick={()=> onChangePage(-1)}>Prev</button>  | {page}  |  
      <button type="button" className="btn btn-secondary btn-lg ms-3" onClick={()=> onChangePage(1)}>Next</button>
    </footer> 
          
  )
}
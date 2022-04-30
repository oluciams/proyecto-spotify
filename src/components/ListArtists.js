import React from 'react';

export const ListArtits = ({images, nameArtist})=>{
  return( 
    <div className="mt-3 mx-auto">
      <div className="card h-100" style={{width: "18rem"}}>
        {images.length ? <img src={images[0].url} className="h-100 w-100" alt="artist"/> : <img className="h-100 w-100" alt="No Image"/>}     
        <div className="card-body">
          <h5 className="card-title">{nameArtist}</h5>        
          {/* <button className="btn btn-primary">Details</button> */}         
          <button type="button" className="btn btn-primary" data-bs-toggle="modal" data-bs-target="#staticBackdrop">
            Details
          <div className="modal fade" id="staticBackdrop" data-bs-backdrop="static" data-bs-keyboard="false" tabindex="-1" aria-labelledby="staticBackdropLabel" aria-hidden="true">
            <div className="modal-dialog">
              <div className="modal-content">
                <div className="modal-header">
                  <h5 className="modal-title" id="staticBackdropLabel">artist</h5>
                  <button type="button" className="btn-close" data-bs-dismiss="modal" aria-label="Close"></button>
                </div>
                <div className="modal-body">              
                </div>
                <div className="modal-footer">
                  <button type="button" className="btn btn-secondary" data-bs-dismiss="modal">Close</button>                
                </div>
              </div>
            </div>
          </div>          
          </button>
        
        </div>
      </div>   
    </div>        
  )
}

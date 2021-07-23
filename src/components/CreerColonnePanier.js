import React from 'react'

function CreerColonnePanier({bd})
 {
    return <div className="card mx-auto shadow-lg mt-4 pl-0 pr-0 d-flex flex-row">
                            <div className=""><img src={'albumsMini'+ bd.image} className="card-image border-1 h-100" alt={bd.titre}/></div>
                            <div className="card-body">
                                <h5 className="card-title font-weight-bold text-center mb-1" style={{color:'#007892'}}>{bd.titre}</h5>
                                <p className="text-center font-weight-bold mb-1">{bd.album}</p>  
                                <p className="card-text auteur font-italic text-center mb-md-3">{bd.auteur}</p>
                            </div>
                    </div>  
 }
 export default CreerColonnePanier
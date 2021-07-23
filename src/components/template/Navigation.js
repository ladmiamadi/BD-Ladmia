import React from 'react'
import { Link, Router } from 'react-router-dom';


class  Navigation extends React.Component
{
    constructor(props)
    {
        super(props)
        this.link= React.createRef();
        this.burger=React.createRef();
        this.focusLink=this.focusLink.bind(this)

    }
    focusLink() {  
       this.link.current.className.search('show')===-1?
       this.link.current.className+=' show':
       this.link.current.className='menu-drop dropdown-menu jaune'
    }
    
    render()
    {
    
    return (
           
                <div className="jaune menu d-flex justify-content-between mx-0 px-2 py-2">
 <div>
                <div className="menu-navigation">
                    <a className="nav-link" href="#" id="navbardrop" ref={this.burger} data-toggle="dropdown"
                    onClick={()=>{
                        this.burger.current.className.search('show')===-1?
                        this.burger.current.className+=' show':
                        this.burger.current.className='nav-link'
                    }}
                    ><img src="img/boutton-menu.svg"/></a>
                    <div className="menu-drop dropdown-menu jaune"  ref={this.link}>
                        <a className="dropdown-item" onClick={this.focusLink} href="#une"  data-toggle="collapse" id="lien">A la une<span className="float-right"><img src="img/fleche-menu.svg"/></span></a>
                            <div className="collapse" id="une">
                                <a href="#" className="nav-link">A paraitre</a>
                                <a href="#" className="nav-link">Nouveautés</a>    
                                <a href="#" className="nav-link">Promotions</a>
                            </div>
                        <a className="dropdown-item" href="#">Albums</a>
                        <a className="dropdown-item" href="#">Auteurs</a>
                        <a className="dropdown-item" href="#">Séries</a>
                    </div> 
                </div>   
            </div>
            <div className="">
               <a href="/" title="Go Home"><img src="img/logo.png" alt="logo" className="img-fluid"/></a>
            </div>
            <div className="d-flex justify-content-between">
                    <span className="d-md-none"><a href="#" ><img src="img/liste-souhait.svg"className="img-fluid"/></a></span>
                    <span className="d-md-inline-block d-none font-weight-bold"><a href={`${process.env.PUBLIC_URL}/inscription`}>S'inscrire</a></span>
                    <a href="inscription"><img src="img/connexion.svg" className="img-fluid"/></a>
                    <span className="d-md-inline-block d-none font-weight-bold"><a href="/inscription">Connexion</a></span>
                    <span className="d-md-none"><a href="#" ><img src="img/panier.svg" className="img-fluid"/></a></span>
            </div>
                </div>
               
          
    )
}
}
export default Navigation
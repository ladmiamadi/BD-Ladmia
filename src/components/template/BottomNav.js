import React from 'react'

class BottomNav extends React.Component {
    constructor(props) {
        super(props)
        this.state={badge:0}
        this.timer=null
    }

    componentDidMount() {
        this.timer= window.setInterval(this.setBadge.bind(this),10);
    }

    componentWillUnmount() {
        window.clearInterval(this.timer);
    }

    setBadge() {
        if(sessionStorage.getItem('x')) {
            this.setState({badge: JSON.parse(sessionStorage.getItem('x')).length})
        }
    }

    render() { 
    return ( 
        <nav className="navbar menu row jaune mx-0" id="bottom-nav">
            <div className="col d-md-block d-none">

            </div>
            
            <div className="col-10 col-md-4 col-lg-5" id='BarreRecherche'> 
                
            </div>
            
            <div className="col-md-5 d-none d-md-block text-right">
               
                <span>
                    <img src="img/panier.svg" alt="Panier"/>
                </span>
                <span 
                    className='badge badge-success mr-1' 
                    style={{fontSize:'20px'}}> {this.state.badge}
                </span>
                <a href="/panier" className="font-weight-bold">Panier</a>
            </div>
        </nav>
        
    )
    }
}
export default BottomNav
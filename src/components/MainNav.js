import React from 'react';
import { Link } from 'react-router-dom';
import Pokeball from '../images/pokeball.png';

const MainNav = () => {
    return (
        <nav>
            <div className="nav-wrapper red">
                <a className="brand-logo center hide-on-small-only show-on-medium-and-up" href="/"><img src={Pokeball} alt="pokeball"/></a>
                <a className="brand-logo left show-on-small hide-on-med-and-up" href="/"><img src={Pokeball} alt="pokeball"/></a>
                <ul id="nav-mobile" className="right">
                    <li><Link to="/">Home</Link></li>
                    <li><Link to="/about">About</Link></li>
                    <li><Link to="/affiliates">Affiliates</Link></li>
                </ul>
            </div>
        </nav>  
    )
}

export default MainNav;
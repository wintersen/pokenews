import React from 'react';
import { Link } from 'react-router-dom';
import Pokeball from '../images/pokeball.png';

const MainNav = () => {
    return (
        <nav>
            <div className="nav-wrapper red">
                <a className="brand-logo center" href="/"><img src={Pokeball} alt="pokeball"/></a>
                <ul id="nav-mobile" className="right hide-on-med-and-down">
                    <li><Link to="/">Home</Link></li>
                    <li><Link to="/about">About</Link></li>
                    <li><Link to="/affiliates">Affiliates</Link></li>
                </ul>
            </div>
        </nav>
    )
}

export default MainNav;
import React from 'react';

const Affiliate = ({name, link, desc}) => {
    return(
        <div className="card">
        <div className="card-content">
            <h4>{name}</h4>
            
            <p>{desc}</p>
            <div className="section">
                <a href={link} className="waves-effect waves-light btn">Visit</a>
            </div>
            
        </div>
            
        </div>
    )
}

export default Affiliate
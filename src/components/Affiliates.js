import React from 'react';
import {useSelector} from 'react-redux';

import Affiliate from '../components/Affiliate';

const Affiliates = () => {

    const affiliates = useSelector(state => state.affiliates);
    const affiliateCards = affiliates.length? ( affiliates.map( a => {
        return (
            <div className="col s4" key={a.name}><Affiliate name={a.name} link={a.link} desc={a.desc}/></div>
        )
    }) ) : ( <div><p>No affiliates found.</p></div> )

    return (
        <div className="container">
            <h4 className="center fancyFont">Affiliates</h4>
            <div className="divider"></div>
            <h5 className="center serifFont">Get more from our trusted partners</h5>
            <div className="divider"></div>
            <div className="section">
                <div className="row">
                    <div className="col s12">
                        <p>While The Littleroot Inquirer does its best to provide you with all your Pokemon news needs, we can't 
                        be everywhere all the time.  Instead, we highly recommend taking a look at these following news sources; 
                        and trust us, we've gone through an extensive vetting process for all of them!  You can trust them to 
                        provide the lastest with the same confidence that you give The Littleroot Inquirer.</p>
                    </div>
                </div>
            </div>
            <div className="section">
                <div className="row">
                    { affiliateCards }
                </div>
            </div>
        </div>
        
    )
}

export default Affiliates;
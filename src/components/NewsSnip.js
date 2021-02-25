import React from 'react';
import { Link } from 'react-router-dom';

const NewsSnip = ({img, headline, tagline, id}) => {
    return (
        <div className="card hoverable horizontal">
            <div className="card-image">
                <img src={img} alt="newsimg"/>
            </div>
            <div className="card-content">
                <Link to={"/news/" + id}>
                    <span className="card-title">{headline}</span>
                </Link>
                <div className="divider"></div>
                <p>{tagline}</p>
                <div className="right-align storyLink">
                    <Link to={"/news/" + id}>Read more</Link>
                </div>
            </div>
        </div> 
    )
}

export default NewsSnip;
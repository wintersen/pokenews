import React from 'react';
import { Link } from 'react-router-dom';

const NewsSnip = () => {
    return (
        <div className="card horizontal">
            <div className="card-image">
                <img src="https://cdn.gamer-network.net/2020/articles/2020-09-28-23-43/it-looks-like-more-details-on-pokemon-sword-and-shields-crown-tundra-expansion-are-coming-tomorrow-1601333008493.jpg/EG11/thumbnail/1920x1078/format/jpg/quality/80" alt="newsimg"/>
            </div>
            <div className="card-content">
                <Link to="/news/1">
                    <span className="card-title">Headline</span>
                </Link>
                <div className="divider"></div>
                <p>Tagline</p>
                <div className="right-align storyLink">
                    <Link to="/news/1">Read more</Link>
                </div>
            </div>
        </div> 
    )
}

export default NewsSnip;
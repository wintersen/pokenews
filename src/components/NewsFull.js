import React from 'react';
import {useParams} from "react-router";

const NewsFull = () => {

        let slug = useParams();
        console.log(slug);

    return (
        <div className="container">
            <div className="genreRow">
                <span>News</span>
                <span>Breaking</span>
                <span>Science</span>
                <span>Breeding</span>
                <span>Championship</span>
                <span>Opinion</span>
            </div>
            <div className="divider"></div>
            <h4 className="center">Headline</h4>
            <h5 className="center">Tagline</h5>
            <div className="divider"></div>
            <div className="row">
                <div className="col s6 left-align"><span>Jenny Anyrites</span></div>
                <div className="col s6 right-align"><span>January 30th, 2021</span></div>
            </div>
            <div className="row">
                <div className="col s12">
                    <img className="storyImg" src="https://cdn.gamer-network.net/2020/articles/2020-09-28-23-43/it-looks-like-more-details-on-pokemon-sword-and-shields-crown-tundra-expansion-are-coming-tomorrow-1601333008493.jpg/EG11/thumbnail/1920x1078/format/jpg/quality/80" alt=""/>
                </div>
            </div>
            <div className="container">
                <p><strong>First sentence of story.</strong> The rest of the story!</p>
            </div>
        </div>
    )
}

export default NewsFull;
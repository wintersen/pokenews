import React from 'react';
import {useParams} from "react-router";
import { useSelector } from 'react-redux';
import { createSelector } from 'reselect';

import Author from '../components/Author';

const NewsFull = () => {

    // Get params from url, then create a selector to cherry pick story from store,
    // then use that selector to grab it (returns an array of results, so we pick 
    // the first array item)
    let slug = useParams();
    const selectStory = createSelector(
        state => state.stories,
        stories => stories.filter(story => story.id === slug.story_id)
    )
    const story = useSelector(selectStory)[0];

    // Now generate taglist using story.genre
    const genreList = story.genre.map(genre => {
        return(
            <span key={genre}>{genre}</span>
        )
    })

    return (
        <div className="container">
            <div className="genreRow">
                <span>News</span>
                { genreList }
            </div>
            <div className="divider"></div>
            <h4 className="center fancyFont">{story.headline}</h4>
            <h5 className="center serifFont">{story.tagline}</h5>
            <div className="divider"></div>
            <div className="row">
                <div className="col s6 left-align"><span>{story.author}</span></div>
                <div className="col s6 right-align"><span>{story.date}</span></div>
            </div>
            <div className="row">
                <div className="col s12">
                    <img className="storyImg" src={story.storyImg} alt="Story Art"/>
                </div>
            </div>
            <div className="whiteBg">
                <div className="container storyFont">
                <p><strong>{story.eyecatch}</strong></p><div dangerouslySetInnerHTML={{__html: '<p>'+story.body+'<p>'}}></div>
            </div>
            </div>
            
            <div className="section">
                <Author name={story.author}/>
            </div>
        </div>
    )
}

export default NewsFull;
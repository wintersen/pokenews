import React from 'react';
import NewsSnip from './NewsSnip';
import { useSelector } from 'react-redux';

const Home = () => {
    const stories = useSelector(state => state.stories);
    console.log(stories)

    const snippets = stories.length ? (
        stories.map(story => {
            return (
                <div className="row">
                    <div className="col s12">
                        <NewsSnip img={story.storyImg} headline={story.headline} tagline={story.tagline} id={story.id} />
                    </div>
                </div>
            )
        })
    ) : (
        <div className="section"><h5 className="center">Looking for news...</h5></div>
    );

    return (
        <div className="container">
            <h4 className="center">The Littleroot Inquirer</h4>
            <div className="divider"></div>
            <div className="filterRow">
                <a className="btn waves-effect waves-red filterBtn btn-flat z-depth-0">Breaking</a>
                <a className="btn waves-effect waves-red filterBtn btn-flat z-depth-0">Science</a>
                <a className="btn waves-effect waves-red filterBtn btn-flat z-depth-0">Breeding</a>
                <a className="btn waves-effect waves-red filterBtn btn-flat z-depth-0">Championship</a>
                <a className="btn waves-effect waves-red filterBtn btn-flat z-depth-0">Opinion</a>
            </div>
            <div className="divider"></div>
            <div className="section">
                { snippets }
            </div>            
        </div>
        
    )
}


export default Home;
import React, { useState } from 'react';
import NewsSnip from './NewsSnip';
import { useSelector } from 'react-redux';

const Home = () => {

    const stories = useSelector(state => state.stories);
    const [filters, setFilters] = useState([]);

    // Add/remove genre filter to state when button is clicked
    const updateFilters = (filter) => {
        if(filters.includes(filter)) {
            let f = filters.filter(f => {
                return f !== filter
            });
            setFilters(f)
        }
        else {
            setFilters([...filters, filter])
        }


    }

    // Create filtered stories array to map into story snippets
    const getFilteredStories = () => {
        let fs = stories;
        if(filters.length){
            fs = stories.filter(story => {
                let matchesGenre = false;
                filters.forEach(f => {
                    story.genre.includes(f)? (matchesGenre = true) : (matchesGenre = matchesGenre);
                });
                return matchesGenre;
            })
        }
        return fs
    }

    // Make snippets to link to full news stories
    const snippets = getFilteredStories().length ? (
        getFilteredStories().map(story => {
            return (
                <div className="row" key={story.id}>
                    <div className="col s12">
                        <NewsSnip img={story.storyImg} headline={story.headline} tagline={story.tagline} date={story.date} id={story.id} />
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
                <a onClick={() => updateFilters('Breaking')} className={filters.includes("Breaking")? ("teal lighten-2 btn waves-effect waves-red filterBtn btn-flat z-depth-0") : ("btn waves-effect waves-red filterBtn btn-flat z-depth-0")}>Breaking</a>
                <a onClick={() => updateFilters('Science')} className={filters.includes("Science")? ("teal lighten-2 btn waves-effect waves-red filterBtn btn-flat z-depth-0") : ("btn waves-effect waves-red filterBtn btn-flat z-depth-0")}>Science</a>
                <a id="Breeding" onClick={() => updateFilters('Breeding')} className={filters.includes("Breeding")? ("teal lighten-2 btn waves-effect waves-red filterBtn btn-flat z-depth-0") : ("btn waves-effect waves-red filterBtn btn-flat z-depth-0")}>Breeding</a>
                <a id="Championship" onClick={() => updateFilters('Championship')} className={filters.includes("Championship")? ("teal lighten-2 btn waves-effect waves-red filterBtn btn-flat z-depth-0") : ("btn waves-effect waves-red filterBtn btn-flat z-depth-0")}>Championship</a>
                <a id="Opinion" onClick={() => updateFilters('Opinion')} className={filters.includes("Opinion")? ("teal lighten-2 btn waves-effect waves-red filterBtn btn-flat z-depth-0") : ("btn waves-effect waves-red filterBtn btn-flat z-depth-0")}>Opinion</a>
            </div>
            <div className="divider"></div>
            <div className="section">
                { snippets }
            </div>            
        </div>
    )
}


export default Home;
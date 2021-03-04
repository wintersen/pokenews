import React from 'react';
import {useSelector} from 'react-redux';
import {createSelector} from 'reselect';

const Author = ({name}) => {

    // Now grab author information
    const selectAuthor = createSelector(
        state => state.authors,
        authors => authors.filter(author => author.name === name)
    )
    const author = useSelector(selectAuthor)[0];

    return (
       <div className="card">
        <div className="card-content">
            <div className="row">
                <div className="col s12 m2">
                    <img className="authorImg circle" src="https://pm1.narvii.com/7768/1b5c4ba24b05f535aac9f09811ef91d19b55f2d6r1-350-490v2_128.jpg" alt="Author icon"/>
                </div>
                <div className="col s12 m10">
                    <div className="row">
                        <div className="col s12">
                            <h5> {author.name} </h5>
                        </div>
                        <div className="col s12">
                            <p> {author.desc} </p>
                        </div>
                    </div>
                </div>
            </div>
        </div>
       </div> 
    )
}

export default Author
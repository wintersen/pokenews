import React from 'react';
import NewsSnip from './NewsSnip';
import { connect } from 'react-redux';

const Home = () => {
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
                
                <div className="row">
                    <div className="col sm12">
                        <NewsSnip />
                    </div>
                </div>
                
            </div>            
        </div>
        
    )
}
const mapStateToProps()

export default connect()(Home);
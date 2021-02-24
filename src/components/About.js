import React from 'react';
import ReporterImg from '../images/reporter.png'

const About = () => {
    return (
        <div className="container">
            <h4 className="center">About</h4>
            <div className="divider"></div>
            <h5 className="center">Real News, Real Reporting, Real Pokemon</h5>
            <div className="divider"></div>
            <div className="section">
                <div className="row">
                    <div className="col s12 m5 xl3"><img src={ ReporterImg } alt="Reporter" className="responsive-img left"/></div>
                    <div className="col s12 m7 xl9">
                        <p className="left-align">The Littleroot Inquirer, established in 2002, was created for the intrepid Pokemon trainers in all of us.  For years, our
                        team has been dedicated to providing the latest breaking Pokemon news to the masses complete with aggressive, no-holds-barred
                        interviews, around-the-clock accurate coverage, and the latest in Pokemon scientific discoveries.  As the Hoenn region's leading
                        news source, we take pride in the quality of our publication and strive to release even better issues every week.  In no small 
                        part due to our team of effective journalists who fly to the biggest news stories in record time, you can be sure that The Littleroot 
                        Inquirer's breaking news coverage is the most accurate around.</p>
                    </div>
                </div>
            </div>
            <div className="section">
                <div className="row">
                    <div className="col s12">
                        <p><strong>Feel confident when you choose The Littleroot Inquirer.</strong> Our paper has been awarded multiple accolades, notably including 
                        the <u>Quilava Seal of Quality</u> in 2004, the <u>Delibird Award for Thorough Research</u> in 2005, and most recently the Pokemon Research 
                        Insitute's highly coveted <u>Accuracy Badge</u> for a decade of news stories with high scientific accuracy and resources.</p>
                    </div>
                </div>
                
            </div>
        </div>
    )
}

export default About;
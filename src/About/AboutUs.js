import {Component} from 'react';
import pict from '../pic.png';

class AboutUs extends Component {
    render() {
        return (
            <div>

                <div className="aboutus-section">
                    <div className="container">
                        <div className="row">
                            <div className="col-md-3 col-sm-6 col-xs-12">
                                <div className="aboutus">
                                    <h2 className="aboutus-title">About Us</h2>
                                    <p className="aboutus-text"><h5>PMCD</h5> vulputate eleifend tellus. Aenean leo
                                        ligula,
                                        porttitor eu, consequat vitae, eleifend ac, enim. Aliquam lorem ante, dapibus
                                        in.
                                    </p>
                                    <p className="aboutus-text">This is Photoshop's version of Lorem Ipsum. Proin
                                        gravida nibh vel velit auctor aliquet. Aenean sollicitudin, lorem quis bibendum
                                        auctor, nisi elit consequat ipsum, nec sagittis sem</p>
                                </div>
                            </div>
                            <div className="col-md-3 col-sm-6 col-xs-12">
                                <div className="aboutus-banner">
                                    <img src={pict}/>
                                </div>
                            </div>
                            <div className="col-md-5 col-sm-6 col-xs-12">
                                <div className="feature">
                                    <div className="feature-box">
                                        <div className="clearfix">
                                            <div className="iconset">

                                            </div>
                                            <div className="feature-content">
                                                <h4>Doctors & Specialist from Different Area</h4>
                                                <p>Aenean vulputate eleifend tellus. Aenean leo ligula, porttitor eu,
                                                    consequat vitae, eleifend ac, enim. Aliquam lorem ante, dapibus
                                                    in.</p>
                                            </div>
                                        </div>
                                    </div>
                                    <div className="feature-box">
                                        <div className="clearfix">
                                            <div className="iconset">

                                            </div>
                                            <div className="feature-content">
                                                <h4>Latest Information about Diseases</h4>
                                                <p>Donec vitae sapien ut libero venenatis faucibu. Nullam quis ante.
                                                    Etiam sit amet orci eget eros faucibus tincidunt</p>
                                            </div>
                                        </div>
                                    </div>
                                    <div className="feature-box">
                                        <div className="clearfix">
                                            <div className="iconset">

                                            </div>
                                            <div className="feature-content">
                                                <h4>Find Hospital Near You</h4>
                                                <p>Aenean vulputate eleifend tellus. Aenean leo ligula, porttitor eu,
                                                    consequat vitae, eleifend ac, enim. Aliquam lorem ante, dapibus
                                                    in.</p>
                                            </div>
                                        </div>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
                <ul className="nav justify-content-end fixed-bottom bg-secondary "
                    style={{zIndex: "auto", backgroundColor: 'black'}}>
                    <li className="nav-item">
                        <a className="nav-link active text-white" href="/"> <i className='fa fa-sign-in'/> Login</a>
                    </li>
                </ul>

            </div>
        )
    }

}

export default AboutUs;
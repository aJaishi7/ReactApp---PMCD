import {Component} from "react";
import myPic from '../pic.png';
import {FontAwesomeIcon} from '@fortawesome/react-fontawesome';


class UserDashboard extends Component {
    render() {
        return (
            <div>
                <div className="container-fluid">
                    <div className="row">
                        <div className="col-sm-12 ">

                                <ul className="nav bg-dark justify-content-end">
                                    <a href="#">
                                        <img src={myPic} alt="Profile Pic"
                                             style={{width: '50px', borderRadius: '60px'}}/>
                                    </a>

                                    <li className="nav-item">
                                        <a className="nav-link small text-white" style={{marginTop: '5px'}} href="#">Arjun
                                            Jaishi</a>
                                    </li>
                                    <li className="nav-item">
                                        <a href="/logout" className="nav-link small text-white" style={{marginTop: '5px'}}>
                                        <i className='fa fa-sign-out'></i>
                                        </a>
                                    </li>
                                </ul>

                            <div className="card">
                                <div className="card-body">


                                    {/*<p className="card-text">Some example text. Some example text.</p>*/}
                                    {/*<a href="#" className="card-link">Another link</a>*/}
                                    {/*<div style={{display: "flex"}}>*/}

                                </div>


                                <ul className="nav nav-tabs justify-content-center">
                                    <li className="nav-item">
                                        <a className="nav-link active" href="/disease">Disease</a>
                                    </li>
                                    <li className="nav-item">
                                        <a className="nav-link" href="/doctor">Doctors</a>
                                    </li>
                                    <li className="nav-item">
                                        <a className="nav-link" href="hospital">Hospital</a>
                                    </li>
                                    <li className="nav-item">
                                        <a className="nav-link" href="news">News</a>
                                    </li>
                                </ul>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        )
    }
}

export default UserDashboard;
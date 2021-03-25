import {Component} from "react";
import ReactRoundedImage from "react-rounded-image";


class UserDashboard extends Component {
    render() {
        return (
            <div>
                <div className="container-fluid">
                    <div className="row">
                        <div className="col-sm-12 ">
                            <nav className="navbar navbar-dark bg-dark">

                            </nav>
                            <div className="card">
                                <div className="card-body">

                                    <h5 className="card-title">Welcome Arjun Jaishi</h5>
                                    {/*<p className="card-text">Some example text. Some example text.</p>*/}
                                    {/*<a href="#" className="card-link">Another link</a>*/}
                                    {/*<div style={{display: "flex"}}>*/}

                                    {/*    <ReactRoundedImage*/}
                                    {/*        image={MyPhoto}*/}
                                    {/*        roundedSize="0"*/}
                                    {/*        imageWidth="110"*/}
                                    {/*        imageHeight="110"/>*/}
                                    {/*</div>*/}


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
            </div>
        )
    }
}

export default UserDashboard;
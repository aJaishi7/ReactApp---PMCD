import {Component} from "react";


class UserDashboard extends Component {
    render() {
        return (
            <div>
                <div className="container-fluid">
                    <div className="row">
                        <div className="col-sm-12 ">
                            <div className="card">
                                <div className="card-body">
                                    <h5 className="card-title">Welcome Arjun Jaishi</h5>
                                    {/*<p className="card-text">Some example text. Some example text.</p>*/}
                                    {/*<a href="#" className="card-link">Card link</a>*/}
                                    {/*<a href="#" className="card-link">Another link</a>*/}

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
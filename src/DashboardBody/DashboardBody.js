import {Component} from "react";

class DashboardBody extends Component {
    render() {
        return (
            <div>
                <div className="card small">
                    <div className="card-body">
                        <ul className="nav nav-tabs justify-content-center">
                            <li className="nav-item">
                                <a className="nav-link active" href="/disease">Disease</a>
                            </li>
                            <li className="nav-item">
                                <a className="nav-link" href="/doctor">Doctors</a>
                            </li>
                            <li className="nav-item">
                                <a className="nav-link" href="/hospital">Hospital</a>
                            </li>
                            <li className="nav-item">
                                <a className="nav-link" href="news">News</a>
                            </li>
                        </ul>

                    </div>
                </div>
            </div>
        );
    }
}

export default DashboardBody;
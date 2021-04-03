import {Component} from "react";
import myPic from "../../pic.png";


class DashboardHeader extends Component {
    render() {
        return (
            <div>
                <ul className="nav bg-dark justify-content-end">
                    <a href="#">
                        <img src={myPic} alt="Profile Pic"
                             style={{width: '50px', borderRadius: '60px'}}/>
                    </a>

                    <li className="nav-item">
                        <a className="nav-link small text-white" style={{marginTop: '5px'}} href="/user-profile">Arjun
                            Jaishi</a>
                    </li>
                    <li className="nav-item">
                        <a href="/logout" className="nav-link small text-white" style={{marginTop: '5px'}}>
                            <i className='fa fa-sign-out'></i>
                        </a>
                    </li>
                </ul>
            </div>
        );
    }
}

export default DashboardHeader;
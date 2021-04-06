import {Component} from "react";
import myPic from "../../pic.png";
import axios from "axios";


class DashboardHeader extends Component {

    state = {
        user: {},
        config: {
            headers: {'Authorization': 'Bearer ' + localStorage.getItem('token')}
        }

    }
    componentDidMount() {
        const config = {
            headers: {'Authorization': 'Bearer ' + localStorage.getItem('token')}
        }
        axios.get(`http://localhost:3000/api/findMe`, config)
            .then((response) => {
                console.log(response);
                this.setState({
                    user: response.data.data
                });
            }).catch((err) => console.log(err.response));
    }


    render() {
        return (
            <div>
                <ul className="nav bg-dark justify-content-end">
                    <a href="#">
                        <img src={myPic} alt="Profile Pic"
                             style={{width: '50px', borderRadius: '60px'}}/>
                    </a>

                    <li className="nav-item">
                        <a className="nav-link small text-white" style={{marginTop: '5px'}} href="/user-profile">{this.state.user.fullName}</a>
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
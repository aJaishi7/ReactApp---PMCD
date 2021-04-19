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
        const id = localStorage.getItem("id");
        axios.get(`http://localhost:3000/api/findMe/${id}`, config)
            .then((response) => {
                console.log(response);
                this.setState({
                    user: response.data.data
                });
            }).catch((err) => console.log(err.response));
    }

    logout = (event) => {
        event.preventDefault();
        localStorage.removeItem('token');
        window.location.href = '/';
    }


    render() {
        let href = ''
        {
            if (this.state.user.usertype == "Doctor") {
                href = '/doctor-profile';
            } else if (this.state.user.usertype == "User") {
                href = '/user-profile';
            }
        }


        return (
            <div>
                <ul className="nav bg-dark justify-content-end">
                    <a href="#">
                        {}
                        <img src={`http://localhost:3000/${this.state.user.photo}`} alt="Profile Pic" id='img-profile'
                             style={{
                                 width: '50px',
                                 height: '50px',
                                 borderRadius: '25%',
                                 marginTop: '1px',
                                 overflow: "hidden",
                                 display: 'inline-block',
                                 position: 'relative'
                             }}/>
                    </a>

                    <li className="nav-item">
                        <a className="nav-link small text-white" style={{marginTop: '7px'}}
                           href={href} id='user-profile'>{this.state.user.fullName}</a>
                    </li>
                    <li className="nav-item">
                        <button className="btn btn-dark" style={{marginTop: '5px'}} onClick={this.logout}>
                            <i className='fa fa-sign-out'></i>
                        </button>
                    </li>
                </ul>
            </div>
        );
    }
}

export default DashboardHeader;
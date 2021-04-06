import {Component} from "react";
import {Redirect} from "react-router-dom";
import '../../Style/text-custom.css';
import axios from 'axios';
import {Alert} from "reactstrap";

class LoginForm extends Component {

    state = {
        username: '',
        password: '',
        isLoggedIn: false,
        config: {
            headers: {'Authorization': "Bearer " + localStorage.getItem('token')}
        },
        visible: false,
        usernameError: '',
        passwordError: '',
        usertype: ''

    }

    validation = () => {
        let usernameError = "";
        let passwordError = "";
        if (!this.state.username) {
            usernameError = 'Required';
        }
        if (!this.state.password) {
            passwordError = 'Required'
        }
        if (usernameError || passwordError) {
            this.setState({usernameError, passwordError});
            return false;
        }
        return true;
    }

    toggle = () => {
        this.setState({
            visible: !this.state.visible
        })
    }

    collapse = () => {
        let usernameError = document.getElementById('usernameError');
        let passwordError = document.getElementById('passwordError');
        usernameError.hidden = true;
        passwordError.hidden = true;


    }

    inputHandler = (event) => {
        this.setState({
            [event.target.name]: event.target.value
        })
    }

    loginHandler = (event) => {
        event.preventDefault();     //Prevents the webpage from reloading
        let valid = this.validation();
        if (valid) {

            axios.post('http://localhost:3000/api/letMeLogin', this.state)
                .then((response) => {
                    if (response.data.success == true) {
                        console.log(response.data.data);
                        localStorage.setItem('token', response.data.token);
                        localStorage.setItem('usertype', response.data.data.usertype);
                        this.setState({
                            username: '',
                            password: '',
                            isLoggedIn: true,
                            usertype: response.data.data.usertype
                        });
                    } else {
                        this.setState({visible: true});
                    }
                }).catch((err) => {
                console.log("Login Error", err);
            });
        }
    }


    render() {
        if (this.state.usertype === 'Doctor') {
            return <Redirect to='/doctor-profile'/>
        } else if (this.state.usertype !== 'Doctor' && this.state.isLoggedIn) {
            return <Redirect to='/user-dashboard'/>
        }
        return (
            <div>
                <div className="main">
                    <div className="col-md-12 col-sm-12">
                        <div className="login-form">

                            <form>
                                {
                                    this.state.visible ?
                                        <Alert color='warning' className='small' isOpen={this.state.visible}
                                               toggle={this.toggle.bind(this)}>Either Username or Password Does not
                                            match</Alert> : ''
                                }
                                <div className='row'>
                                    <div className="col-sm-4 custom-col">
                                        <div className="form-group">
                                            <input type="text" className="form-control text-custom"
                                                   required
                                                   name='username'
                                                   placeholder="Username"
                                                   onChange={this.inputHandler}
                                                   value={this.state.username}
                                            />
                                            <span className='small' id='usernameError' style={{
                                                color: "red",
                                                float: "left"
                                            }}>{this.state.usernameError}</span>
                                        </div>
                                    </div>

                                    <div className="col-sm-4 custom-col">
                                        <div className="form-group">
                                            <input type="password" className="form-control text-custom"
                                                   required
                                                   name='password'
                                                   placeholder="Password"
                                                   onChange={this.inputHandler}
                                                   value={this.state.password}
                                            />
                                            <span className='small' id='passwordError' style={{
                                                color: "red",
                                                float: "left"
                                            }}>{this.state.passwordError}</span>
                                        </div>
                                    </div>

                                    <div className="col-sm-2 custom-col small">
                                        <button type="submit"
                                                onClick={this.loginHandler}
                                                title='Login'
                                                data-toggle='tooltip'
                                                className="btn btn-info form-control fa fa-sign-in">
                                        </button>

                                    </div>
                                </div>
                            </form>
                        </div>
                    </div>
                </div>

            </div>
        );
    }
}

export default LoginForm;
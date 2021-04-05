import {Component} from "react";
import 'react-phone-number-input/style.css';
import '../../Style/text-custom.css';
import axios from "axios";
import {Alert} from "reactstrap";


class Register extends Component {

    state = {
        fullName: '',
        username: '',
        phone: '',
        password: '',
        visible: false,


        fullnameError: '',
        usernameError: '',
        phoneError: '',
        passwordError: '',

    };

    validation = () => {
        let fullnameError = '';
        let usernameError = '';
        let phoneError = '';
        let passwordError = '';

        if (!this.state.fullName) {
            fullnameError = 'Required';
        } else if (!this.state.username) {
            usernameError = 'Required';
        } else if (!this.state.phone) {
            phoneError = 'Required';
        } else if (!this.state.password) {
            passwordError = 'Required';
        }
        if (fullnameError || usernameError || phoneError || passwordError) {
            this.setState({
                fullnameError,
                usernameError,
                phoneError,
                passwordError
            });
            return false;
        }
        return true;
    };


    inputHandler = (event) => {
        this.setState({
            [event.target.name]: event.target.value
        })
    };

    toggle = () => {
        this.setState({
            visible: !this.state.visible
        });
    }

    registerHandler = (event) => {
        event.preventDefault();

        let isValid = this.validation();
        if (isValid) {
            axios.post('http://localhost:3000/api/register', this.state)
                .then((response) => {
                    if (response.data.success == true) {
                        console.log(response);
                        this.setState({
                            fullName: '',
                            username: '',
                            phone: '',
                            password: '',
                            visible: true,
                        });
                    }
                })
                .catch((err) => {
                    console.log("Register Error: ", err);
                });
        }

    };

    //matchPassword
    matchPassword = () => {
        let password = document.getElementById("pw").value;
        let rpassword = document.getElementById("rpw").value;
        let showHide = document.getElementById("showHide");
        let btn = document.getElementById("btn");

        if (password !== rpassword && rpassword !== '') {
            showHide.style.display = "block";
            btn.disabled = true;

        } else {
            showHide.style.display = "none";
            btn.disabled = false;
        }

    }


    render() {
        return (
            <div>
                <div className="main">
                    <div className="col-md-9 col-sm-12">
                        <div className="register-form" id="register-form">
                            <p>Please fill up details to connect with us !</p>
                            <form className='form card jumbotron '>
                                {
                                    this.state.visible ?
                                        <Alert color='primary' toggle={this.toggle.bind(this)}
                                               isOpen={this.state.visible}>User
                                            Registered</Alert> : <Alert color='danger' toggle={this.toggle.bind(this)}
                                                                        isOpen={this.state.visible}>Error! User Not
                                            Registered</Alert>
                                }
                                <div className="form-group">
                                    <input
                                        id='fullname'
                                        type="text"
                                        className="form-control text-custom"
                                        placeholder="Enter Fullname"
                                        name='fullName'
                                        onChange={this.inputHandler}
                                        value={this.state.fullName}
                                        required/>
                                    <span className='small' id='usernameError' style={{
                                        color: "red",
                                        float: "left"
                                    }}>{this.state.fullnameError}</span>
                                </div>
                                <div className="form-group">
                                    <input
                                        id='username'
                                        type="text"
                                        className="form-control text-custom"
                                        placeholder="Enter Username"
                                        name='username'
                                        onChange={this.inputHandler}
                                        value={this.state.username}
                                        required/>
                                    <span className='small' id='usernameError' style={{
                                        color: "red",
                                        float: "left"
                                    }}>{this.state.usernameError}</span>
                                </div>
                                <div className="form-group">
                                    <input type="text"
                                           id='phone'
                                           className="form-control text-custom"
                                           placeholder="Enter Phone No."
                                           name='phone'
                                           onChange={this.inputHandler}
                                           value={this.state.phone}
                                           required/>
                                    <span className='small' id='usernameError' style={{
                                        color: "red",
                                        float: "left"
                                    }}>{this.state.phoneError}</span>
                                </div>

                                <div className="form-group" >
                                    <input
                                        type='password'
                                        className="form-control text-custom"
                                        placeholder="Enter Password"
                                        name='password'
                                        onKeyUp={this.matchPassword}
                                        id='pw'
                                        onChange={this.inputHandler}
                                        value={this.state.password}
                                        required/>
                                    <span className='small' id='usernameError' style={{
                                        color: "red",
                                        float: "left"
                                    }}>{this.state.passwordError}</span>
                                </div>

                                <div className="form-group" style={{position: 'relative', display: 'flex'}}>
                                    <input
                                        type="password"
                                        className="form-control text-custom"
                                        placeholder="Re-enter Password"
                                        name='rpassword'
                                        id='rpw'
                                        onKeyUp={this.matchPassword}
                                        onChange={this.inputHandler}
                                        required/>

                                    <label style={{
                                        top: '10%',
                                        position: 'absolute',
                                        marginTop: '35px',
                                        right: '1%',
                                        color: "red",
                                        fontSize: '10px',
                                        display: "none",
                                    }}

                                           id='showHide'
                                           className='small'>
                                        Password Does not match
                                    </label>


                                </div>

                                <button
                                    type="submit"
                                    id='btn'
                                    title='Click to register'
                                    className="btn btn-info form-control small"
                                    onClick={this.registerHandler}>
                                    Register
                                </button>

                            </form>
                        </div>
                    </div>
                </div>
            </div>
        );
    }
}

export default Register;
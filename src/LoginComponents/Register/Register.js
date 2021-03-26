import {Component} from "react";
import 'react-phone-number-input/style.css';
import PhoneInput from "react-phone-number-input";

class Register extends Component {


    //Show Hide Password
    togglePassword = () => {
        let x = document.getElementById("pw");
        let y = document.getElementById("rpw");
        if (x.type === "password" || y.type === "password") {
            x.type = "text";
            y.type = "text";
        } else {
            x.type = "password";
            y.type = "password";
        }
    }

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

    validateFields = () => {
        let btn = document.getElementById("btn");
        let fullname = document.getElementById('fullname').value;
        let username = document.getElementById('username').value;
        let phone = document.getElementById('phone').value;
        if (fullname === "") {
            btn.disabled = true;
        } else if (username === "") {
            btn.disabled = true;
        } else if (phone === "") {
            btn.disabled = true;
        } else {
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
                            <form>

                                <div className="form-group">
                                    <input
                                        id='fullname'
                                        type="text"
                                        onKeyUp={this.validateFields}
                                        className="form-control"
                                        placeholder="Enter Fullname"
                                        name='fullname'
                                        required/>
                                </div>
                                <div className="form-group">
                                    <input
                                        id='username'
                                        type="text"
                                        onKeyUp={this.validateFields}
                                        className="form-control"
                                        placeholder="Enter Username"
                                        name='username'
                                        required/>
                                </div>
                                <div className="form-group">
                                    <input type="text"
                                           id='phone'
                                           onKeyUp={this.validateFields}
                                           className="form-control"
                                           placeholder="Enter Phone No."
                                           name='phone'
                                           required/>
                                </div>

                                <div className="form-group" style={{position: 'relative', display: 'flex'}}>
                                    <input
                                        type='password'
                                        className="form-control"
                                        placeholder="Enter Password"
                                        name='password'
                                        onKeyUp={this.matchPassword}
                                        id='pw'
                                        required/>
                                    <i className='fa fa-eye'
                                       onClick={this.togglePassword}
                                       style={{position: "absolute", right: '1%', top: '25%'}}/>
                                </div>

                                <div className="form-group" style={{position: 'relative', display: 'flex'}}>
                                    <input
                                        type="password"
                                        className="form-control"
                                        placeholder="Re-enter Password"
                                        name='rpassword'
                                        id='rpw'
                                        onKeyUp={this.matchPassword}
                                        required/>
                                    <i className='fa fa-eye'
                                       onClick={this.togglePassword}
                                       style={{position: "absolute", right: '1%', top: '25%'}}/>
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
                                    className="btn btn-info form-control"
                                    disabled
                                    onClick={this.matchPassword}>
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
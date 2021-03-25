import {Button, Col, Container, Form, FormGroup, Input, Label, Row} from "reactstrap";
import {Component} from 'react';
import {Redirect} from 'react-router-dom';

class Login extends Component {

    render() {

        return (

            <div>
                <div className="sidenav">
                    <div className="login-main-text">
                        <h2>Welcome to PMCD</h2>
                        <p>Precautions & Medicine For Common Diseases</p>
                        <p>A No. 1 App Providing <br/> disease related information.</p>

                    </div>
                </div>

                <div className="main">
                    <div className="col-md-12 col-sm-12">
                        <div className="login-form">
                            <form>
                                <div className='row'>
                                    <div className="col-sm-4 custom-col">
                                        <div className="form-group">
                                            <input type="text" className="form-control"
                                                   placeholder="Enter Username"/>
                                        </div>
                                    </div>

                                    <div className="col-sm-4 custom-col">
                                        <div className="form-group">
                                            <input type="password" className="form-control"
                                                   placeholder="Enter Password"/>
                                        </div>
                                    </div>

                                    <div className="col-sm-2 custom-col">
                                        <button type="submit" className="btn btn-info form-control">Login</button>
                                    </div>
                                </div>
                            </form>
                        </div>
                    </div>
                </div>

                <hr/>
                <div className="main">

                    <div className="col-md-9 col-sm-12">
                        <div className="register-form" id="register-form">
                            <p>Please fill up details to connect with us !</p>
                            <form>
                                <div className="form-group">
                                    <input type="text" className="form-control"
                                           placeholder="Enter Fullname"/>
                                </div>
                                <div className="form-group">
                                    <input type="text" className="form-control"
                                           placeholder="Enter Username"/>
                                </div>
                                <div className="form-group">
                                    <input type="text" className="form-control"
                                           placeholder="Enter Phone No."/>
                                </div>
                                <div className="form-group">
                                    <input type="password" className="form-control"
                                           placeholder="Enter Password"/>
                                </div>
                                <div className="form-group">
                                    <input type="password" className="form-control"
                                           placeholder="Re-enter Password"/>
                                </div>

                                <button type="submit"
                                        className="btn btn-info form-control">Register
                                </button>

                            </form>
                        </div>
                    </div>
                </div>
            </div>
        )
    }
}

export default Login;
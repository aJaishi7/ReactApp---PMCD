import {Button, Col, Container, Form, FormGroup, Input, Label, Row} from "reactstrap";
import {Link} from "react-router-dom";

const {Component} = require("react");


class Register extends Component {
    render() {
        return (
            <div>
                <Container ClassName="container-fluid">
                    <Row ClassName="row">
                        <Col ClassName="col-sm-6">

                            <div className="sidenav">
                                <div className="login-main-text">
                                    <h2>Welcome to PMCD</h2>
                                    <p>Precautions & Medicine For Common Diseases</p>
                                    <p>SignUp from here and start using our app...</p>
                                </div>
                            </div>

                            <div className="main">

                                <div className="col-md-6 col-sm-12">
                                    <div className="register-form" id="register-form">
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
                                                <input type="text" className="form-control"
                                                       placeholder="Enter Password"/>
                                            </div>
                                            <div className="form-group">
                                                <input type="text" className="form-control"
                                                       placeholder="Re-enter Password"/>
                                            </div>
                                            <button type="submit"
                                                    className="btn btn-black form-control">Register
                                            </button>
                                            <a href='/login' className="btn-link custom-link">Already have an
                                                account? <br/>Login </a>
                                        </form>
                                    </div>
                                </div>
                            </div>
                        </Col>
                    </Row>
                </Container>

            </div>
        )
    }
}

export default Register;
import {Component} from 'react';
import {Redirect} from 'react-router-dom';
import { SocialIcon } from 'react-social-icons';


class Login extends Component {

    state = {redirect: ''};

    redirectTo = () => {
        this.setState({redirect: '/user-dashboard'});
    }

    render() {

        if (this.state.redirect) {
            return <Redirect to={this.state.redirect}/>
        }


        return (

            <div>
                <div className="sidenav">
                    <div className="login-main-text">
                        <h2>Welcome to PMCD</h2>
                        <p>Precautions & Medicine For Common Diseases</p>
                        <p>A No. 1 App Providing <br/> disease related information.</p>
                        <br/>
                        <p>Find us on</p>
                        <p>
                            {<SocialIcon url={'https://twitter.com/jaketrent'} style={{height:"30px", width:'30px', marginRight:'2px'}}/>  }
                            {<SocialIcon url={'https://facebook.com/jaketrent'} style={{height:"30px", width:'30px' , marginRight:'2px'}}/> }
                            {<SocialIcon url={'https://instagram.com/jaketrent'} style={{height:"30px", width:'30px' , marginRight:'2px'}}/> }
                        </p>

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
                                        <button type="submit"
                                                onClick={this.redirectTo} className="btn btn-info form-control fa fa-sign-in">
                                        </button>

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

                <ul className="nav justify-content-end fixed-bottom bg-secondary "
                    style={{zIndex: "auto", backgroundColor: 'black'}}>
                    <li className="nav-item">
                        <a className="nav-link active text-white" href="/about"><i className='fa fa-info-circle'/></a>
                    </li>
                </ul>
            </div>
        )
    }
}

export default Login;
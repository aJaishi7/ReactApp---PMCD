import {Component} from "react";
import {Redirect} from "react-router-dom";

class LoginForm extends Component {


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
                <div className="main">
                    <div className="col-md-12 col-sm-12">
                        <div className="login-form">
                            <form>
                                <div className='row'>
                                    <div className="col-sm-4 custom-col">
                                        <div className="form-group">
                                            <input type="text" className="form-control"
                                                   required
                                                   placeholder="Enter Username"/>
                                        </div>
                                    </div>

                                    <div className="col-sm-4 custom-col">
                                        <div className="form-group">
                                            <input type="password" className="form-control"
                                                   required
                                                   placeholder="Enter Password"/>
                                        </div>
                                    </div>

                                    <div className="col-sm-2 custom-col">
                                        <button type="submit"
                                                onClick={this.redirectTo}
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
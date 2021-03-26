import {Component} from 'react';
import {Redirect} from 'react-router-dom';
import LoginText from "./LoginText/LoginText";
import LoginFooter from "./LoginFooter/LoginFooter";
import Register from "./Register/Register";
import LoginForm from "./LoginForm/LoginForm";
import HorizontalRow from "../HorizonalRow/HorizontalRow";


class Login extends Component {

    render() {
        return (
            <div>
                <LoginText></LoginText>
                <LoginForm></LoginForm>
                <HorizontalRow></HorizontalRow>
                <Register></Register>
                <LoginFooter></LoginFooter>
            </div>
        )
    }
}

export default Login;
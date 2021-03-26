import {Component} from "react";
import IconSocial from "../IconsSocial/IconSocial";

class LoginText extends Component {
    render() {
        return (
            <div>
                <div className="sidenav">
                    <div className="login-main-text">
                        <h2>Welcome to PMCD</h2>
                        <p>Precautions & Medicine For Common Diseases</p>
                        <p>A No. 1 App Providing <br/> disease related information.</p>
                        <br/>
                        <p>Find us on</p>
                        <IconSocial></IconSocial>
                    </div>
                </div>

            </div>
        );
    }
}

export default LoginText;
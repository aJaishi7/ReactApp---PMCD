import {Component} from "react";

class LoginFooter extends Component{
    render() {
        return (
            <div>
                <ul className="nav justify-content-end fixed-bottom bg-secondary "
                    style={{zIndex: "auto", backgroundColor: 'black'}}>
                    <li className="nav-item">
                        <a className="nav-link active text-white" href="/about"><i className='fa fa-info-circle'/></a>
                    </li>
                </ul>
            </div>
        );
    }
}
export default LoginFooter;
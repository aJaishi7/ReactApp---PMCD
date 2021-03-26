import {Component} from 'react';
import {Route} from 'react-router-dom';
import Login from "../LoginComponents/Login";
import UserDashboard from "../UserDashboard/UserDashboard";
import AboutUs from "../About/AboutUs";
import Disease from "../UserDashboard/Disease/Disease";
import Doctor from "../UserDashboard/Doctor/Doctor";
import Hospital from "../UserDashboard/Hospitals/Hospital";

class RouteHandler extends Component {
    render() {
        return (
            <div>
                <Route path="/" exact component={Login}/>
                <Route path="/user-dashboard" exact component={UserDashboard}/>
                <Route path="/about" exact component={AboutUs}/>
                <Route path="/disease" exact component={Disease}/>
                <Route path="/doctor" exact component={Doctor}/>
                <Route path="/hospital" exact component={Hospital}/>
            </div>
        )
    }
}

export default RouteHandler;
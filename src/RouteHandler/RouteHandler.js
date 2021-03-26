import {Component} from 'react';
import {Route} from 'react-router-dom';
import Login from "../Login/Login";
import UserDashboard from "../UserDashboard/UserDashboard";
import AboutUs from "../About/AboutUs";
import Disease from "../Disease/Disease";
import Doctor from "../Doctor/Doctor";
import Hospital from "../Hospitals/Hospital";

class RouteHandler extends Component {
    render() {
        return (
            <div>
                <Route path="/" exact component={Login}/>
                <Route path="/user-dashboard" exact component={UserDashboard}/>
                <Route path="/about" exact component={AboutUs}/>
                <Route path="/disease" exact component={Disease}/>
                <Route path="/doctors" exact component={Doctor}/>


            </div>
        )
    }
}

export default RouteHandler;
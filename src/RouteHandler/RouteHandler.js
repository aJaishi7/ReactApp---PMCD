import {Component} from 'react';
import {Route} from 'react-router-dom';
import Login from "../Login/Login";
import UserDashboard from "../UserDashboard/UserDashboard";
import AboutUs from "../About/AboutUs";


class RouteHandler extends Component {
    render() {
        return (
            <div>
                <Route path="/" exact component={Login}/>
                <Route path="/user-dashboard" exact component={UserDashboard}/>
                <Route path="/about" exact component={AboutUs}/>
            </div>
        )
    }
}

export default RouteHandler;
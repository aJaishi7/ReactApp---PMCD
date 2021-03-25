import {Component} from 'react';
import {Route} from 'react-router-dom';
import Login from "../Login/Login";
import UserDashboard from "../UserDashboard/UserDashboard";


class RouteHandler extends Component {
    render() {
        return (
            <div>
                <Route path="/" exact component={Login}/>
                <Route path="/user-dashboard" exact component={UserDashboard}/>
            </div>
        )
    }
}

export default RouteHandler;
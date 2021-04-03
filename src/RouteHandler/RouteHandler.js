import {Component} from 'react';
import {Route} from 'react-router-dom';
import Login from "../LoginComponents/Login";
import UserDashboard from "../UserDashboard/UserDashboard";
import AboutUs from "../About/AboutUs";
import Disease from "../UserDashboard/Disease/Disease";
import Doctor from "../UserDashboard/Doctor/Doctor";
import Hospital from "../UserDashboard/Hospitals/Hospital";
import UserProfile from "../UserProfile/UserProfile";
import DoctorProfile from "../DoctorProfile/DoctorProfile";
import UpdateDoctorProfile from "../DoctorProfile/UpdateDoctorProfile";
import UpdateUserProfile from "../UserProfile/UpdateUserProfile";
import DiseaseList from "../Disease/DiseaseList";
import AddDisease from "../Disease/AddDisease";

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
                <Route path="/user-profile" exact component={UserProfile}/>
                <Route path="/doctor-profile" exact component={DoctorProfile}/>
                <Route path="/update-doctor" exact component={UpdateDoctorProfile}/>
                <Route path="/update-user" exact component={UpdateUserProfile}/>
                <Route path="/disease-list" exact component={DiseaseList}/>
                <Route path="/add-disease" exact component={AddDisease}/>
            </div>
        )
    }
}

export default RouteHandler;
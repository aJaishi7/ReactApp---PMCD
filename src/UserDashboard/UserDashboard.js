import {Component} from "react";
import DashboardHeader from './DashboardHeader/DashboardHeader';
import DashboardBody from "./DashboardBody/DashboardBody";
import Search from "./Search/Search";


class UserDashboard extends Component {
    render() {
        return (
            <div>
                <div className="container-fluid">
                    <div className="row">
                        <div className="col-sm-12 ">
                            <DashboardHeader></DashboardHeader>
                            <DashboardBody> </DashboardBody>
                        </div>
                    </div>
                </div>
            </div>
        )
    }
}

export default UserDashboard;
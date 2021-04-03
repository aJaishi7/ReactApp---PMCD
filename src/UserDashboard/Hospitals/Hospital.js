import {Component} from "react";

class Hospital extends Component {
    render() {
        return (
            <div>
                <div className="alert alert-info" style={{marginLeft:'40px',marginRight:'40px', marginTop:'2px'}}>
                    <strong>Search Hospitals and Clinics Near Your location</strong>
                </div>
            </div>
        );
    }

}

export default Hospital;
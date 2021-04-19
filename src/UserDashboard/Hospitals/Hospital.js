import {Component} from "react";

const AnyReactComponent = ({ text }) => <div>{text}</div>;
const mapStyles = {
    width: '90%',
    height: '85%',
    margin:'180',
    center:'mapcenter',
};


class Hospital extends Component {


    render() {
        return (
            <div>
                <div className="alert alert-info" style={{marginLeft:'40px',marginRight:'40px', marginTop:'2px'}}>
                    <strong>Search Hospitals and Clinics Near Your location</strong>

                    <div className="jumbotron">

                    </div>
                </div>
            </div>
        );
    }

}

export default Hospital;
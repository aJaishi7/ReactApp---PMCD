import {Component} from "react";
import myPic from "../pic.png";
import '../Style/text-custom.css';

class DoctorProfile extends Component {
    render() {
        return (
            <div>
                <div className="container" style={{marginTop: '5px'}}>
                    <div className="row">
                        <div className="col-sm-12">

                            <div className='card'>
                                <div className='card-header alert-info'>

                                    <img src={myPic} alt="User Picture" style={{width: '100px', borderRadius: '50px'}}/>
                                    <p style={{marginTop: '2px'}}>Arjun Jaishi - Doctor </p>
                                    <p style={{fontSize: '12px', textDecoration: 'bold'}}>
                                        <a href="/update-doctor" className='badge badge-dark'
                                           style={{marginRight: '5px'}}>Update </a>
                                        <a href="/disease-list" className='badge badge-dark'>Disease</a>
                                    </p>
                                    <p style={{fontSize: '12px', textDecoration: 'bold'}}><a href="/user-dashboard">Go
                                        to <i className='fa fa-dashboard'> Dashboard</i></a></p>

                                </div>
                                <div className='card-body alert-info'>

                                    <div className="row">
                                        <div className='form-group col-sm-4'>
                                            <input type="text" className='form-control text-custom' value='username'/>
                                        </div>

                                        <div className='form-group col-sm-4'>
                                            <input type="text" className='form-control text-custom' value='email'/>
                                        </div>

                                        <div className='form-group col-sm-4'>
                                            <input type="text" className='form-control text-custom' value='phone'/>
                                        </div>

                                    </div>

                                    <div className="row">
                                        <div className='form-group col-sm-4'>
                                            <input type="text" className='form-control text-custom' value='address'/>
                                        </div>

                                        <div className='form-group col-sm-4'>
                                            <input type="text" className='form-control text-custom' value='gender'/>
                                        </div>

                                        <div className='form-group col-sm-4'>
                                            <input type="text" className='form-control text-custom' value='dateOfBirth'/>
                                        </div>

                                    </div>

                                    <div className="row">
                                        <div className='form-group col-sm-6'>
                                            <textarea className='form-control text-custom' value='Experience' rows='5'/>
                                        </div>

                                        <div className='form-group col-sm-6'>
                                            <textarea className='form-control text-custom' value='Specialist At' rows='5'/>
                                        </div>
                                    </div>
                                    <hr/>
                                    <div className="row small" style={{float: 'right'}}>
                                        <div className="col-sm-12 small">
                                            <button style={{
                                                border: '1px',
                                                borderRadius: '5px',
                                                backgroundColor: "lightslategrey",
                                                color: "white"
                                            }}>Delete Profile
                                            </button>
                                        </div>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        );
    }
}

export default DoctorProfile;
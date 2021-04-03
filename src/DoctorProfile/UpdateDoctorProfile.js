import {Component} from "react";
import myPic from "../pic.png";
import '../Style/text-custom.css';

class UpdateDoctorProfile extends Component {
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
                                        <a href="" className='badge badge-dark'>Disease</a>
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
                                            <textarea className='form-control text-custom' value='Experience'/>
                                        </div>

                                        <div className='form-group col-sm-6'>
                                            <textarea className='form-control text-custom' value='Specialist At'/>
                                        </div>
                                    </div>
                                    <div className="row">
                                        <div className="col-sm-1">
                                            <button className='btn btn-success btn-sm'>Update</button>
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

export default UpdateDoctorProfile;
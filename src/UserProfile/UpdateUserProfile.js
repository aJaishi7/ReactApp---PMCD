import {Component} from "react";
import myPic from "../pic.png";

class UpdateUserProfile extends Component {
    render() {
        return (
            <div>
                <div className="container" style={{marginTop: '5px'}}>
                    <div className="row">
                        <div className="col-sm-12">

                            <div className='card'>
                                <div className='card-header alert-info'>

                                    <img src={myPic} alt="User Picture" style={{width: '100px', borderRadius: '50px'}}/>
                                    <p style={{marginTop: '2px'}}>Arjun Jaishi </p>
                                    <p style={{fontSize: '12px', textDecoration: 'bold'}}><a href="/user-dashboard">Go
                                        to <i className='fa fa-dashboard'> Dashboard</i></a></p>

                                </div>
                                <div className='card-body alert-info'>

                                    <div className="row">
                                        <div className='form-group col-sm-4'>
                                            <input type="text" className='form-control' value='username'/>
                                        </div>

                                        <div className='form-group col-sm-4'>
                                            <input type="text" className='form-control' value='email'/>
                                        </div>

                                        <div className='form-group col-sm-4'>
                                            <input type="text" className='form-control' value='phone'/>
                                        </div>

                                    </div>

                                    <div className="row">
                                        <div className='form-group col-sm-4'>
                                            <input type="text" className='form-control' value='address'/>
                                        </div>

                                        <div className='form-group col-sm-4'>
                                            <input type="text" className='form-control' value='gender'/>
                                        </div>

                                        <div className='form-group col-sm-4'>
                                            <input type="text" className='form-control' value='dateOfBirth'/>
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

export default UpdateUserProfile;
import {Component} from "react";
import myPic from "../pic.png";
import '../Style/text-custom.css';

class UpdateUserProfile extends Component {


    render() {
    const {data} = this.props;
        return (
            <div>
                <div className="container" style={{marginTop: '5px'}}>
                    <div className="row">
                        <div className="col-sm-12">

                            <div className='card'>
                                <div className='card-header alert-info'>

                                    <img src={myPic} alt="User Picture" style={{width: '100px', borderRadius: '50px'}}/>
                                    <p style={{marginTop: '2px'}}><input type="text" name='fullName' style={{
                                        borderRadius: '2px',
                                        border: '1px blue'
                                    }} placeholder='Your Name'
                                                                         value={data}
                                                                         className='small text-center'/></p>
                                    <p style={{fontSize: '12px', textDecoration: 'bold'}}><a href="/user-dashboard">Go
                                        to <i className='fa fa-dashboard'> Dashboard</i></a></p>
                                </div>

                                <div className='card-body alert-info'>

                                    <div className="row">
                                        <div className='form-group col-sm-4'>
                                            <label htmlFor="" style={{float: "left"}} className='small'>Username</label>
                                            <input type="text" className='form-control text-custom'
                                                   placeholder='username'/>
                                        </div>

                                        <div className='form-group col-sm-4'>
                                            <label htmlFor="" style={{float: "left"}} className='small'>Email</label>
                                            <input type="text" className='form-control text-custom'
                                                   placeholder='email'/>
                                        </div>

                                        <div className='form-group col-sm-4'>
                                            <label htmlFor="" style={{float: "left"}} className='small'>Phone</label>
                                            <input type="text" className='form-control text-custom'
                                                   placeholder='phone'/>
                                        </div>

                                    </div>

                                    <div className="row">
                                        <div className='form-group col-sm-4'>
                                            <label htmlFor="" style={{float: "left"}} className='small'>Address</label>
                                            <input type="text" className='form-control text-custom'
                                                   placeholder='address'/>
                                        </div>

                                        <div className='form-group col-sm-4'>
                                            <label htmlFor="" style={{float: "left"}} className='small'>Gender</label>
                                            <input type="text" className='form-control text-custom'
                                                   placeholder='gender'/>
                                        </div>

                                        <div className='form-group col-sm-4'>
                                            <label htmlFor="" style={{float: "left"}} className='small'>Date of
                                                Birth</label>
                                            <input type="text" className='form-control text-custom'
                                                   placeholder='dateOfBirth'/>
                                        </div>
                                    </div>
                                    <hr/>
                                    <div className="row small">
                                        <div className="col-sm-12 small">
                                            <button className='btn btn-success btn-sm'>Update Profile
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
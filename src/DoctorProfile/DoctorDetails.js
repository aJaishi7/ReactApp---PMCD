import {Component} from "react";

class DoctorDetails extends Component {
    render() {
        const {state} = this.props.location;
        return (
            <div>
                <div className="card">
                    <div className="jumbotron">
                        <h4>Doctor Details</h4>
                        <hr/>
                        <p>  <img src={`http://localhost:3000/${state.photo}`} alt="User Picture" style={{width: '100px', borderRadius: '20%'}}/></p>
                        <p><label htmlFor="" style={{float: "left"}}>Doctor Name</label>
                            <input type="text" value={state.fullName} disabled className='form-control btn-sm'/></p>
                        <p><label htmlFor="" style={{float: "left"}}>Specialist At</label>
                            <input type="text" value={state.specialistAt} disabled className='form-control btn-sm'/></p>
                        <p>
                            <label htmlFor="" style={{float: 'left'}}>Experience</label>
                            <input type='text' name="" id="" cols="30" rows="5" value={state.experience}
                                      className='form-control btn-sm' disabled></input>
                        </p>
                        <p>
                            <label htmlFor="" style={{float: 'left'}}>Phone</label>
                            <input type='text'  name="" id="" cols="30" rows="5" value={state.phone}
                                      className='form-control btn-sm' disabled></input>
                        </p>

                        <p>
                            <label htmlFor="" style={{float: 'left'}}>Email </label>
                            <input type='text' name="" id="" cols="30" rows="5" value={state.email}
                                      className='form-control btn-sm' disabled></input>
                        </p>
                        <p>
                            <label htmlFor="" style={{float: 'left'}}>Address </label>
                            <input type='text' name="" id="" cols="30" rows="5" value={state.address}
                                      className='form-control btn-sm' disabled></input>
                        </p>

                        <p>
                            <label htmlFor="" style={{float: 'left'}}>Gender </label>
                            <input type='text' name="" id="" cols="30" rows="5" value={state.gender}
                                   className='form-control btn-sm' disabled></input>
                        </p>
                    </div>
                </div>
            </div>
        );
    }
}

export default DoctorDetails;
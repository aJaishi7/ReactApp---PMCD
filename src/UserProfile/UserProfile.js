import {Component} from "react";
import myPic from "../pic.png";
import '../Style/text-custom.css';
import axios from "axios";
import {Link, Redirect} from "react-router-dom";

class UserProfile extends Component {

    state = {
        user: [],
        isDeleted: false,
        isEdit: false,
        config: {
            headers: {'Authorization': 'Bearer ' + localStorage.getItem('token')}
        }

    }

    componentDidMount() {
        const config = {
            headers: {'Authorization': 'Bearer ' + localStorage.getItem('token')}
        }
        axios.get(`http://localhost:3000/api/findMe/`, config)
            .then((response) => {
                console.log(response);
                this.setState({
                    user: response.data.data
                });
            }).catch((err) => console.log(err.response));
    }

    actionDelete = (event) => {
        event.preventDefault();

        const config = {
            headers: {'Authorization': 'Bearer ' + localStorage.getItem('token')}
        }

        axios.delete(`http://localhost:3000/api/removeMe`, config)
            .then((response) => {
                console.log(response.data)
                this.setState({
                    isDeleted: true
                })
            }).catch((err) => console.log(err.response));
    }

    render() {
        if (this.state.isDeleted) {
            return <Redirect to='/'/>
        }

        return (
            <div>
                <div className="container" style={{marginTop: '5px'}}>
                    <div className="row">
                        <div className="col-sm-12">

                            <div className='card'>
                                <div className='card-header alert-info'>

                                    <img src={myPic} alt="User Picture" style={{width: '100px', borderRadius: '50px'}}/>
                                    <p style={{marginTop: '2px'}}>{this.state.user.fullName} </p>
                                    <p style={{marginTop: '2px'}} className='small'>{this.state.user.usertype} </p>
                                    <p style={{fontSize: '12px', textDecoration: 'bold'}}>
                                        <Link to={{
                                            pathname: '/update-user/'
                                        }} className='badge badge-dark' style={{marginRight: '5px'}}>Update
                                        </Link>
                                    </p>
                                    <p style={{fontSize: '12px', textDecoration: 'bold'}}><a href="/user-dashboard/">Go
                                        to <i className='fa fa-dashboard'> Dashboard</i></a></p>

                                </div>
                                <div className='card-body alert-info'>

                                    <div className="row">
                                        <div className='form-group col-sm-4'>
                                            <label htmlFor="" style={{float: "left"}} className='small'>Username</label>
                                            <input type="text" className='form-control text-custom'
                                                   value={this.state.user.username}/>
                                        </div>

                                        <div className='form-group col-sm-4'>
                                            <label htmlFor="" style={{float: "left"}} className='small'>Email</label>
                                            <input type="text" className='form-control text-custom'
                                                   value={this.state.user.email}/>
                                        </div>

                                        <div className='form-group col-sm-4'>
                                            <label htmlFor="" style={{float: "left"}} className='small'>Phone</label>
                                            <input type="text" className='form-control text-custom'
                                                   value={this.state.user.phone}/>
                                        </div>

                                    </div>

                                    <div className="row">
                                        <div className='form-group col-sm-4'>
                                            <label htmlFor="" style={{float: "left"}} className='small'>Address</label>
                                            <input type="text" className='form-control text-custom'
                                                   value={this.state.user.address}/>
                                        </div>

                                        <div className='form-group col-sm-4'>
                                            <label htmlFor="" style={{float: "left"}} className='small'>Gender</label>
                                            <input type="text" className='form-control text-custom'
                                                   value={this.state.user.gender}/>
                                        </div>

                                        <div className='form-group col-sm-4'>
                                            <label htmlFor="" style={{float: "left"}} className='small'>Date of
                                                Birth</label>
                                            <input type="text" className='form-control text-custom'
                                                   placeholder='Date of Birth'
                                                   value={this.state.user.dateOfBirth}/>
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
                                            }}
                                                    type='submit'
                                                    onClick={(event => {
                                                        if (window.confirm("Are you sure?"))
                                                            this.actionDelete(event)
                                                    })}
                                            >Delete Profile
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

export default UserProfile;
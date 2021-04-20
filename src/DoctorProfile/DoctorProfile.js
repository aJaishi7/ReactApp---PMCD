import {Component} from "react";
import myPic from "../pic.png";
import '../Style/text-custom.css';
import axios from "axios";
import {Redirect} from "react-router-dom";
import '../Style/RoundImage.css';
import $ from 'jquery';
import * as url from "url";


class DoctorProfile extends Component {

    state = {
        user: [],
        isDeleted: false,
        isEdit: false,
        config: {
            headers: {'Authorization': 'Bearer ' + localStorage.getItem('token')}
        },
        photo: null

    }


    componentDidMount() {

        function readURL(input) {
            if (input.files && input.files[0]) {
                var reader = new FileReader();
                reader.onload = function (e) {
                    $("#imagePreview").css(
                        "background-image",
                        "url(" + e.target.result + ")"
                    );
                    $("#imagePreview").hide();
                    $("#imagePreview").fadeIn(650);
                };
                reader.readAsDataURL(input.files[0]);
            }
        }

        $("#imageUpload").change(function () {
            readURL(this);
        });


        const config = {
            headers: {'Authorization': 'Bearer ' + localStorage.getItem('token')}
        }
        const id = localStorage.getItem("id");
        axios.get(`http://localhost:3000/api/findMe/${id}`, config)
            .then((response) => {
                console.log(response);
                this.setState({
                    user: response.data.data,
                    url: response.data.data.photo
                });
            }).catch((err) => console.log(err.response));

    }

    actionFileSelect = (e) => {
        this.setState({
            photo: e.target.files[0]
        })
    }

    actionUploadProfilePic = (e) => {
        e.preventDefault();
        const config = {
            headers: {'Authorization': 'Bearer ' + localStorage.getItem('token')}
        }
        const formData = new FormData();
        formData.append('photo', this.state.photo);
        axios.post(`http://localhost:3000/api/uploadProfileImage/${this.state.user._id}`, formData, config).then((response) => {
            if (response.data.success == true) {
                // console.log(response.data);
                window.location.reload();
                alert("Profile Image Uploaded");
                this.setState({
                    user: {...this.state.user, photo: response.data.filename}
                })
            }
        })
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


    actionUpdate = (e) => {
        e.preventDefault();
        const config = {
            headers: {'Authorization': 'Bearer ' + localStorage.getItem('token')}
        }
        axios.put(`http://localhost:3000/api/updateMe`, this.state.user, config)
            .then((response) => {
                if (response.data.success == true) {

                    window.location.reload();
                    alert(`Dear ${response.data.data.fullName} your profile has been updated`);
                }
            }).catch((err) => console.log(err.response));
    }

    logout = (event) => {
        event.preventDefault();
        localStorage.removeItem('token');
        window.location.href = '/';
    }

    inputHandler = (e) => {
        this.setState({
            user: {...this.state.user, [e.target.name]: e.target.value}
        });
    };


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


                                    <div>
                                        <div className="container prof1">
                                            <div className="avatar-upload">
                                                <div className="avatar-edit">
                                                    <input type='file' id="imageUpload" accept=".png, .jpg, .jpeg"
                                                           onChange={this.actionFileSelect}
                                                           name='fileUpload'/>
                                                    <label htmlFor="imageUpload"></label>
                                                </div>
                                                <div className="avatar-preview">

                                                    <div id='imagePreview'
                                                         style={{backgroundImage: `url('http://localhost:3000/uploads/${this.state.user.photo}')`}}>
                                                    </div>
                                                </div>

                                            </div>
                                            <button className='btn btn-sm border-secondary btn-success'
                                                    onClick={this.actionUploadProfilePic}> Upload
                                            </button>
                                        </div>

                                    </div>

                                    <p style={{marginTop: '2px'}}>{this.state.user.fullName} <br/> <strong
                                        className='small'>{this.state.user.usertype}</strong></p>
                                    <p className='btn btn-sm border-secondary '>
                                        <a href="/disease-list">Disease</a> |
                                        <a href="/user-dashboard/"> Go
                                            to <i className='fa fa-dashboard'> Dashboard</i></a>
                                    </p>
                                    <p style={{fontSize: '12px', textDecoration: 'bold'}}></p>
                                    <p style={{fontSize: '12px', textDecoration: 'bold'}}>
                                        <button className='btn btn-sm border-secondary' onClick={this.logout}>Logout
                                        </button>
                                    </p>

                                </div>
                                <div className='card-body alert-info'>

                                    <div className="row">
                                        <div className='form-group col-sm-4'>
                                            <label htmlFor="" style={{float: "left"}} className='small'>Username</label>
                                            <input type="text" className='form-control text-custom'
                                                   value={this.state.user.username}
                                                   onChange={this.inputHandler}
                                                   name='username'
                                            />
                                        </div>

                                        <div className='form-group col-sm-4'>
                                            <label htmlFor="" style={{float: "left"}} className='small'>Email</label>
                                            <input type="text" className='form-control text-custom'
                                                   value={this.state.user.email}
                                                   name='email'
                                                   onChange={this.inputHandler}/>
                                        </div>

                                        <div className='form-group col-sm-4'>
                                            <label htmlFor="" style={{float: "left"}} className='small'>Phone</label>
                                            <input type="text" className='form-control text-custom'
                                                   value={this.state.user.phone}
                                                   name='phone'
                                                   onChange={this.inputHandler}/>
                                        </div>

                                    </div>

                                    <div className="row">
                                        <div className='form-group col-sm-4'>
                                            <label htmlFor="" style={{float: "left"}} className='small'>Address</label>
                                            <input type="text" className='form-control text-custom'
                                                   value={this.state.user.address}
                                                   name='address'
                                                   onChange={this.inputHandler}/>
                                        </div>

                                        <div className='form-group col-sm-4'>
                                            <label htmlFor="" style={{float: "left"}} className='small'>Gender</label>
                                            <input type="text" className='form-control text-custom'
                                                   value={this.state.user.gender}
                                                   name='gender'
                                                   onChange={this.inputHandler}/>
                                        </div>

                                        <div className='form-group col-sm-2'>
                                            <label htmlFor="" style={{float: "left"}} className='small'>Date of
                                                Birth</label>
                                            <input type="text" className='form-control text-custom'
                                                   placeholder='Date of Birth'
                                                   value={new Date(this.state.user.dateOfBirth).toDateString()}
                                                   min="1980-01-01" max="2021-12-31"
                                                   name='dateOfBirth'
                                                   onChange={this.inputHandler}/>

                                        </div>

                                        <div className='form-group col-sm-2'>
                                            <label htmlFor="" style={{float: "left"}} className='small'> Update Date of
                                                Birth</label>
                                            <input type="date" className='form-control text-custom'
                                                   placeholder='Date of Birth'
                                                   min="1980-01-01" max="2021-12-31"
                                                   name='dateOfBirth'
                                                   onChange={this.inputHandler}/>

                                        </div>

                                        <div className='form-group col-sm-4'>
                                            <label htmlFor="" style={{float: "left"}} className='small'>Specialist
                                                At</label>
                                            <input type="text" className='form-control text-custom'
                                                   value={this.state.user.specialistAt}
                                                   name='specialistAt'
                                                   onChange={this.inputHandler}/>
                                        </div>

                                        <div className='form-group col-sm-4'>
                                            <label htmlFor="" style={{float: "left"}}
                                                   className='small'>Experience</label>
                                            <input type="text" className='form-control text-custom'
                                                   value={this.state.user.experience}
                                                   name='experience'
                                                   onChange={this.inputHandler}/>
                                        </div>

                                    </div>
                                    <hr/>

                                    <p style={{fontSize: '12px', textDecoration: 'bold', float: 'left'}}>
                                        <button className='badge badge-dark' style={{marginRight: '5px'}}
                                                onClick={(event => {
                                                    this.actionUpdate(event)
                                                })}
                                        >Update
                                        </button>
                                    </p>

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

export default DoctorProfile;
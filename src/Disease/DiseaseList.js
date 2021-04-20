import {Component} from "react";

import '../Style/custom-disease.css';
import '../Style/text-custom.css';
import axios from "axios";
import {Link, Redirect} from "react-router-dom";

class DiseaseList extends Component {


    state = {
        disease: [],
        isLoaded: false,
        config: {
            headers: {'Authorization': "Bearer " + localStorage.getItem('token')}
        },
        isDeleted: false
    }

    componentDidMount() {

        axios.get('http://localhost:3000/api/findDisease', this.state.config)
            .then((response) => {
                this.setState({
                    disease: response.data.data,
                    isLoaded: true
                });
            }).catch((err) => console.log(err.response));
    }


    handleDelete = (diseaseId) => {

        const config = {
            headers: {'Authorization': "Bearer " + localStorage.getItem('token')}
        }

        axios.delete(`http://localhost:3000/api/deleteDisease/${diseaseId}`, config)
            .then((response) => {

                    if (response.data.success == true) {
                        window.location.reload();

                        const filter = this.state.disease.filter((disease) => {
                            return disease._id !== diseaseId
                        })

                        this.setState({
                            disease: filter,
                            isDeleted: true
                        })
                    } else {
                        alert("Not");
                    }
                }
            ).catch((err) => console.log(err.response));
    }

    render() {
        const {disease, isLoaded} = this.state;

        if (!isLoaded) {
            return <div>Please Wait! Loading Data ...</div>
        } else {
            return (
                <div>
                    <div className="container">
                        <div className="row">
                            <div className="col-md-12">
                                <div className="card">
                                    <div className="card-header alert-info">Diseases</div>
                                    <div className="card-body">
                                        <div className="container">

                                            <div className="row small">
                                                <div className="col-sm-12">
                                                    <ul style={{listStyle: "none"}}>
                                                        <li>
                                                            <a href="/add-disease"
                                                               style={{float: "left", marginBottom: '5px'}}
                                                               className='text-custom btn border-secondary btn-sm'>
                                                                Disease <i className='fa fa-plus-circle'></i></a>
                                                            <a style={{float: "right"}}
                                                               href="/user-dashboard" className='text-custom btn border-secondary'>
                                                                Dashboard <i className='fa fa-dashboard'></i>
                                                            </a>
                                                        </li>
                                                    </ul>
                                                </div>
                                            </div>


                                            {
                                                this.state.disease.map((disease) => {
                                                        const Disease = <div>

                                                            <div className="row border tab-content">
                                                                <div className="col-sm-12 custom-disease">
                                                                    <button style={{
                                                                        float: "right",
                                                                        marginTop: '10px',
                                                                        borderRadius: '20px'
                                                                    }} className='btn btn-sm'
                                                                            onClick={(event) => {
                                                                                if (window.confirm(`Are you sure want to delete ${disease.diseaseName} ?`))
                                                                                    this.handleDelete(disease._id)
                                                                                window.location.reload();
                                                                            }}>
                                                                        <i
                                                                            className='fa fa-trash small'></i></button>

                                                                    <Link to={{
                                                                        pathname: `update-disease/${disease._id}`
                                                                    }}

                                                                          style={{
                                                                              float: "right",
                                                                              marginTop: '10px',
                                                                              borderRadius: '20px'
                                                                          }}
                                                                          className='btn btn-sm'><i
                                                                        className='fa fa-edit small'></i></Link>

                                                                    <ul style={{
                                                                        listStyle: 'none',
                                                                        color: 'black',
                                                                        marginTop: '10px'
                                                                    }}>
                                                                        <Link to={{
                                                                            pathname: `update-disease/${disease._id}`
                                                                        }} className='small'>
                                                                            <li>
                                                                                {disease.diseaseName}
                                                                            </li>
                                                                        </Link>
                                                                    </ul>

                                                                </div>
                                                            </div>

                                                        </div>


                                                        return Disease;
                                                    }
                                                )}
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
}

export default DiseaseList;
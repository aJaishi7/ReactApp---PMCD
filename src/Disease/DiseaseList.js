import {Component} from "react";

import '../Style/custom-disease.css';
import '../Style/text-custom.css';
import axios from "axios";

class DiseaseList extends Component {


    state = {
        disease: [],
        isLoaded: false,
        config: {
            headers: {'Authorization': "Bearer " + localStorage.getItem('token')}
        }
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
                                                        <li><a href="/add-disease" className='text-custom btn btn-dark btn-sm'>Add
                                                            Disease</a>
                                                            <p style={{fontSize: '12px', textDecoration: 'bold'}}><a
                                                                href="/user-dashboard">Go
                                                                to <i className='fa fa-dashboard'> Dashboard</i></a></p>
                                                        </li>
                                                    </ul>
                                                </div>
                                            </div>


                                            {
                                                this.state.disease.map((disease) => {
                                                    const Disease = <a href="/update-disease" className='small'>
                                                        <div className="row border tab-content custom-disease">
                                                            <div className="col-sm-12">
                                                                <ul style={{
                                                                    listStyle: 'none',
                                                                    color: 'black',
                                                                    marginTop: '10px'
                                                                }}>
                                                                    <li>
                                                                        {disease.diseaseName}
                                                                    </li>
                                                                </ul>
                                                            </div>
                                                        </div>
                                                    </a>

                                                    return Disease;
                                                })}
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
import {Component} from 'react';
import axios from "axios";

class Disease extends Component {

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
                    <div className="alert alert-info"
                         style={{marginTop: '2px'}}>
                        <strong>Diseases</strong>
                    </div>


                    <div className='container'>
                        <div className="row justify-content-center">
                            <div className="col-sm-12">

                                {
                                    this.state.disease.map((disease) => {
                                        const Disease = <a href="" className='small'>
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
            )

        }
    }
}

export default Disease;
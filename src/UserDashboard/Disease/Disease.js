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
                         style={{marginLeft: '40px', marginRight: '40px', marginTop: '2px'}}>
                        <strong>Diseases</strong>
                    </div>


                    <div className='container-fluid'>
                        <div className="row justify-content-center">
                            <div className="col-auto">
                                <table className=' small table-responsive' style={{fontSize: '14px'}}>
                                    {this.state.disease.map((disease) => {
                                        const Disease = <tr>
                                            <td><a href="/disease-details"
                                                   className='text-center badge badge-info'> {disease.diseaseName}</a>
                                            </td>
                                        </tr>
                                        return Disease;
                                    })}

                                </table>
                            </div>
                        </div>
                    </div>

                </div>
            )

        }
    }
}

export default Disease;
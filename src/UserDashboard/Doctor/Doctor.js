import {Component} from 'react';
import axios from "axios";

class Doctor extends Component {

    state = {
        doctor: [],
        isLoaded: false,
        config: {
            headers: {'Authorization': "Bearer " + localStorage.getItem('token')}
        }
    }

    componentDidMount() {

        axios.get('http://localhost:3000/api/findDoctor', this.state.config)
            .then((response) => {
                this.setState({
                    doctor: response.data.data,
                    isLoaded: true
                });
            }).catch((err) => console.log(err.response));
    }

    render() {
        const {doctor, isLoaded} = this.state;
        if (!isLoaded) {
            return <div>Please Wait! Loading Data ...</div>
        } else {
            return (
                <div>
                    <div className="alert alert-info"
                         style={{marginLeft: '40px', marginRight: '40px', marginTop: '2px'}}>
                        <strong>Doctors</strong>
                    </div>

                    <div className='container-fluid'>
                        <div className="row justify-content-center">
                            <div className="col-auto">
                                <table className=' small table-responsive' style={{fontSize: '14px'}}>
                                    {this.state.doctor.map((doctor) => {
                                        const Doctors = <tr>
                                            <td><a href="/doctor-details"
                                                   className='text-center badge badge-info'> {doctor.fullName}</a>
                                            </td>
                                        </tr>
                                        return Doctors;
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

export default Doctor;
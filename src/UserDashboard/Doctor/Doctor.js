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
                         style={{marginTop: '2px'}}>
                        <strong>Doctors</strong>
                    </div>

                    <div className='container'>
                        <div className="row justify-content-center">
                            <div className="col-sm-12">

                                {
                                    this.state.doctor.map((doctor) => {
                                        const Doctor = <a href="" className='small'>
                                            <div className="row border tab-content custom-disease">
                                                <div className="col-sm-12">
                                                    <ul style={{
                                                        listStyle: 'none',
                                                        color: 'black',
                                                        marginTop: '10px'
                                                    }}>
                                                        <li>
                                                            {doctor.fullName}
                                                        </li>
                                                    </ul>
                                                </div>
                                            </div>
                                        </a>

                                        return Doctor;
                                    })}
                            </div>
                        </div>
                    </div>
                </div>
            )

        }
    }
}

export default Doctor;
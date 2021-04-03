import {Component} from "react";

import '../Style/custom-disease.css';
import '../Style/text-custom.css';

class DiseaseList extends Component {
    render() {
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
                                                    <li><a href="/add-disease" className='text-custom'>Add
                                                        Disease</a><br/>
                                                        <p style={{fontSize: '12px', textDecoration: 'bold'}}><a
                                                            href="/user-dashboard">Go
                                                            to <i className='fa fa-dashboard'> Dashboard</i></a></p>
                                                    </li>
                                                </ul>
                                            </div>
                                        </div>

                                        <div className="row">
                                            <div className="col-sm-12">
                                                <ul style={{listStyle: 'none', color: 'black'}}>
                                                    <li className='border small custom-disease'>
                                                        <a href="/update-disease" className='text-black-50'>Cancer </a>
                                                    </li>

                                                </ul>
                                            </div>
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

export default DiseaseList;
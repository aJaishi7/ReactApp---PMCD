import {Component} from "react";
import '../Style/custom-disease.css';

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
                                                    <li><a href="/add-disease">Add Disease</a><br/>
                                                        <a href="/user-dashboard"> Go to
                                                            Dashboard </a></li>
                                                </ul>
                                            </div>
                                        </div>

                                        <div className="row">
                                            <div className="col-sm-12">
                                                <ul style={{listStyle: 'none', color: 'black'}}>
                                                    <li className='border small custom-disease'>
                                                        <a href="" className='text-black-50'>Cancer</a>
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
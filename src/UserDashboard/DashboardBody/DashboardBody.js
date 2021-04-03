import {Component} from "react";

class DashboardBody extends Component {


    render() {
        return (
            <div>
                <div className="card small">
                    <div className="card-body">
                        <ul className="nav nav-tabs justify-content-center">
                            <li className="nav-item ">
                                <a className="nav-link active" href="/disease" target='iframe_a'>Disease</a>
                            </li>
                            <li className="nav-item ">
                                <a className="nav-link" href="/doctor" target='iframe_a' data-toggle="tab">Doctors</a>
                            </li>
                            <li className="nav-item">
                                <a className="nav-link" href="/hospital" target='iframe_a'
                                   data-toggle="tab">Hospital</a>
                            </li>
                        </ul>
                        
                        <div className='feature-box custom-search'>
                            <div className='form-group h5' style={{margin: '10px'}}>
                                <i className='fa fa-search icn'/>
                                <input type="text" name='txtSearch' className=' custom-frmControl'
                                       placeholder='Search'/>

                                <iframe name="iframe_a" src={'/disease'} height="300px" width="100%"
                                        title="Iframe Example"
                                        className='border'>
                                </iframe>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        );
    }
}

export default DashboardBody;
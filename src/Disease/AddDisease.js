import {Component} from "react";
import '../Style/text-custom.css';


class AddDisease extends Component {
    render() {
        return (
            <div>
                <div className="container">
                    <div className="row">
                        <div className="col-md-12">
                            <div className="card">
                                <div className="card-header alert-info">Add Diseases</div>
                                <div className="card-body">
                                    <div className="container">

                                        <div className="row small">
                                            <div className="col-sm-12">
                                                <ul style={{listStyle: "none"}}>
                                                        <a href="/user-dashboard"> Go to
                                                            Dashboard </a>
                                                </ul>
                                            </div>
                                        </div>

                                        <div className="row">
                                            <div className="col-sm-12">
                                                <form action="">
                                                  <div className="row">
                                                      <div className="col-sm-6">
                                                          <div className="form-group">
                                                              <input type="text" name='diseaseName' className='form-control text-custom' placeholder='Disease Name'/>
                                                          </div>
                                                      </div>

                                                      <div className="col-sm-6">
                                                          <div className="form-group">
                                                              <input type="text" name='diseaseType' className='form-control text-custom' placeholder='Disease Type'/>
                                                          </div>
                                                      </div>
                                                  </div>

                                                    <div className="row">
                                                        <div className="col-sm-12">
                                                            <div className="form-group">
                                                                <textarea name='description' className='form-control text-custom' placeholder='Description'
                                                                rows='5'/>
                                                            </div>
                                                        </div>
                                                    </div>

                                                    <div className="row">
                                                        <div className="col-sm-6">
                                                            <div className="form-group">
                                                                <textarea name='mildCauses' className='form-control text-custom' placeholder='Mild Causes'
                                                                          rows='5'/>
                                                            </div>
                                                        </div>

                                                        <div className="col-sm-6">
                                                            <div className="form-group">
                                                                <textarea name='severeCauses' className='form-control text-custom' placeholder='Severe Causes'
                                                                          rows='5'/>
                                                            </div>
                                                        </div>
                                                    </div>

                                                    <div className="row">
                                                        <div className="col-sm-12">
                                                            <div className="form-group">
                                                                <textarea name='preventiveMeasures' className='form-control text-custom' placeholder='Preventive Measures'
                                                                          rows='5'/>
                                                            </div>
                                                        </div>
                                                    </div>

                                                    <div className="row">
                                                        <div className="col-sm-12">
                                                            <div className="form-group">
                                                                <textarea name='medicines' className='form-control text-custom' placeholder='Medicines'
                                                                          rows='5'/>
                                                            </div>
                                                        </div>
                                                    </div>

                                                    <div className="row">
                                                        <div className="col-sm-12">
                                                            <div className="form-group">
                                                                <textarea name='eatables' className='form-control text-custom' placeholder='Eatables'
                                                                          rows='5'/>
                                                            </div>
                                                        </div>
                                                    </div>

                                                    <div className="row">
                                                        <div className="col-sm-12">
                                                            <div className="form-group">
                                                               <button className='btn btn-success'>Add Disease</button>
                                                            </div>
                                                        </div>
                                                    </div>

                                                </form>
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

export default AddDisease;
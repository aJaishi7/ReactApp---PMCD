import {Component} from "react";
import '../Style/text-custom.css';
import axios from "axios";


class UpdateDisease extends Component {

    state = {
        isDeleted: false,
        config: {
            headers: {'Authorization': 'Bearer ' + localStorage.getItem('token')}
        },
        disease: []
    }

    update=()=>{
        const {state} = this.props.location;
        this.setState({
            disease:state
        })
    }



    render() {
    const disease = this.state.disease;

        return (
            <div>
                <div className="container">
                    <div className="row">
                        <div className="col-md-12">
                            <div className="card">
                                <div className="card-header alert-info">Update Diseases</div>
                                <div className="card-body">
                                    <div className="container">

                                        <div className="row small">
                                            <div className="col-sm-12">
                                                <ul style={{listStyle: "none"}}>
                                                    <li><a href="/user-dashboard"> Go to
                                                        Dashboard </a></li>
                                                </ul>
                                            </div>
                                        </div>

                                        <div className="row">
                                            <div className="col-sm-12">
                                                <form action="">
                                                    <div className="row">
                                                        <div className="col-sm-6">
                                                            <div className="form-group">
                                                                <label htmlFor="" style={{float: "left"}}
                                                                       className='small'>Disease Name</label>
                                                                <input type="text" name='diseaseName'
                                                                       className='form-control text-custom'
                                                                       value={disease.diseaseName}
                                                                       placeholder='Disease Name'/>
                                                            </div>
                                                        </div>

                                                        <div className="col-sm-6">
                                                            <div className="form-group">
                                                                <label htmlFor="" style={{float: "left"}}
                                                                       className='small'>Disease Type</label>
                                                                <input type="text" name='diseaseType'
                                                                       className='form-control text-custom'
                                                                       value={disease.diseaseType}
                                                                       placeholder='Disease Type'/>
                                                            </div>
                                                        </div>
                                                    </div>

                                                    <div className="row">
                                                        <div className="col-sm-12">
                                                            <div className="form-group">
                                                                <label htmlFor="" style={{float: "left"}}
                                                                       className='small'>Description</label>
                                                                <textarea name='description'
                                                                          className='form-control text-custom'
                                                                          placeholder='Description'
                                                                          // value={disease.description}
                                                                          rows='5'/>
                                                            </div>
                                                        </div>
                                                    </div>

                                                    <div className="row">
                                                        <div className="col-sm-6">
                                                            <div className="form-group">
                                                                <label htmlFor="" style={{float: "left"}}
                                                                       className='small'>Mild Causes</label>
                                                                <textarea name='mildCauses'
                                                                          className='form-control text-custom'
                                                                          placeholder='Mild Causes'
                                                                          // value={disease.mildCauses}
                                                                          rows='5'/>
                                                            </div>
                                                        </div>

                                                        <div className="col-sm-6">
                                                            <div className="form-group">
                                                                <label htmlFor="" style={{float: "left"}}
                                                                       className='small'>Severe Causes</label>
                                                                <textarea name='severeCauses'
                                                                          className='form-control text-custom'
                                                                          placeholder='Severe Causes'
                                                                          // value={disease.severeCauses}
                                                                          rows='5'/>
                                                            </div>
                                                        </div>
                                                    </div>

                                                    <div className="row">
                                                        <div className="col-sm-12">
                                                            <div className="form-group">
                                                                <label htmlFor="" style={{float: "left"}}
                                                                       className='small'>Preventive Measures</label>
                                                                <textarea name='preventiveMeasures'
                                                                          className='form-control text-custom'
                                                                          placeholder='Preventive Measures'
                                                                          // value={disease.preventiveMeasures}
                                                                          rows='5'/>
                                                            </div>
                                                        </div>
                                                    </div>

                                                    <div className="row">
                                                        <div className="col-sm-12">
                                                            <div className="form-group">
                                                                <label htmlFor="" style={{float: "left"}}
                                                                       className='small'>Medicines</label>
                                                                <textarea name='medicines'
                                                                          className='form-control text-custom'
                                                                          placeholder='Medicines'
                                                                          // value={disease.medicines}
                                                                          rows='5'/>
                                                            </div>
                                                        </div>
                                                    </div>

                                                    <div className="row">
                                                        <div className="col-sm-12">
                                                            <div className="form-group">
                                                                <label htmlFor="" style={{float: "left"}}
                                                                       className='small'>Edible things during disease
                                                                    period</label>
                                                                <textarea name='eatables'
                                                                          className='form-control text-custom'
                                                                          placeholder='Eatables'
                                                                          // value={disease.eatables}
                                                                          rows='5'/>
                                                            </div>
                                                        </div>
                                                    </div>

                                                    <div className="row">
                                                        <div className="col-sm-12">
                                                            <div className="form-group">
                                                                <div className="row">
                                                                    <div className="col-sm-6">
                                                                        <button className='btn btn-success btn-sm'
                                                                                style={{float: "left"}}>Update
                                                                            Disease
                                                                        </button>
                                                                    </div>
                                                                    <div className="col-sm-6">
                                                                        {/*<button className='btn btn-sm btn-danger small'*/}
                                                                        {/*        onClick={(event) => {*/}
                                                                        {/*            if (window.confirm('Are you sure ?'))*/}
                                                                        {/*                this.handleDelete(disease._id)*/}
                                                                        {/*        }}*/}
                                                                        {/*        style={{float: "right"}}>Delete*/}
                                                                        {/*</button>*/}
                                                                    </div>
                                                                </div>
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

export default UpdateDisease;
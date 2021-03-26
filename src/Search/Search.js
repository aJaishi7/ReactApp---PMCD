import {Component} from "react";

class Search extends Component {
    render() {
        return (
            <div>
                <div className='feature-box border custom-search'>

                    <div className='form-group h5' style={{margin: '10px'}}>
                        <i className='fa fa-search icn'/>
                        <input type="text" name='txtSearch' className=' custom-frmControl'
                               placeholder='Search Diseases'
                        />

                    </div>
                </div>
            </div>
        );
    }
}

export default Search;
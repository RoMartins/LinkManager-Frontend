import React from 'react';


import Layout from '../../../Layouts/Manage'
import { getFormData } from '../../../../helpers/form';
import { LinkCreate } from '../../../../actions/LinkActions';
import { connect } from 'react-redux';
import { Redirect } from 'react-router-dom';



const Create = ({LinkCreate, link}) => {


    const HandlerCreateLink = (e) => {
        e.preventDefault();
        const data = getFormData(e);

        LinkCreate(data)
    }

    
    return (

        <Layout>

            <h1>Create Link</h1>
            <div>
                <form onSubmit={HandlerCreateLink}>
                    <div className="form-group">
                        <label>Label</label>
                        <input type="text" className="form-control" name="label"/>
                    </div>

                    <div className="form-group">
                        <label>Url</label>
                        <input type="text" className="form-control" name="url"/>
                    </div>

                    <div className="form-group form-check">
                        <label className="form-check-label">
                            <input type="checkbox" name="isSocial"/>
                            <span className="form-check-sign"></span>
                            Is Social
                        </label>
                    </div>

                    <div>
                        <button className="btn btn-primary btn-round">Submit</button>
                    </div>
                </form>
            </div>
            </Layout>
    )       
}

const mapStateToProps = (state) => {
    return { link: state.link.link }
}


export default connect(mapStateToProps, {LinkCreate})(Create) ; 
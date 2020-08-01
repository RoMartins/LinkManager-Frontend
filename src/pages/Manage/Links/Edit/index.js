import React, { useEffect } from 'react';

import Layout from '../../../Layouts/Manage'
import { useParams } from 'react-router-dom';
import { LinkOne } from '../../../../actions/LinkActions';
import { connect } from 'react-redux';
import FormGroup from '../../../components/FormGroup';
import FormCheckBox from '../../../components/FormCheckBox';

const Edit = ({LinkOne, link}) => {
    const {id} = useParams();

    useEffect(() => {
        LinkOne(id);

    }, [LinkOne,id])

    return (
        <Layout>

            <h1>Edit Link</h1>
            <div>
                <form>
                   <FormGroup label="Label" name="label" data={link} type ="text" />
                   <FormGroup label="Url" name="url" data={link} type ="text" />
                    <FormCheckBox labes="Is Social" name="isSocial" data={link}/>
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
  
  export default connect(mapStateToProps, {LinkOne})(Edit) ; 
import React, { useEffect } from 'react';

import Layout from '../../../Layouts/Manage'
import { useParams } from 'react-router-dom';
import { LinkOne, LinkUpdate } from '../../../../actions/LinkActions';
import { connect } from 'react-redux';
import FormGroup from '../../../components/FormGroup';
import FormCheckBox from '../../../components/FormCheckBox';
import { getFormData } from '../../../../helpers/form';


const Edit = ({LinkOne, link, LinkUpdate}) => {
    const {id} = useParams();


    useEffect(() => {
        LinkOne(id);

    }, [LinkOne,id])

   const HandlerUpdateLink = (e) => {
        e.preventDefault();

        const data = getFormData(e)

        LinkUpdate(id ,data)
    }

    return (
        <Layout>

            <h1>Edit Link</h1>
            <div>
                <form onSubmit={HandlerUpdateLink}>
                   <FormGroup label="Label" data={link} name="label"  type ="text" />
                   <FormGroup label="Url" data={link}  name="url" type ="text" />
                    <FormCheckBox label="Is Social" name="isSocial" data={link}/>
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
  
  export default connect(mapStateToProps, {LinkOne, LinkUpdate})(Edit) ; 
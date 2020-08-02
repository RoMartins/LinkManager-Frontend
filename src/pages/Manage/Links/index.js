import React, { useEffect } from 'react';
import { Link } from 'react-router-dom';

import Layout from '../../Layouts/Manage'
import { connect } from 'react-redux';
import {LinkList, setLinkDelete, LinkDelete} from '../../../actions/LinkActions'


const Links = ( {LinkList, LinkToRemove, links , setLinkDelete, LinkDelete}) => {

    useEffect (() => {
        LinkList()
    }, [LinkList])

    const cancelDelete = (e) => {
        setLinkDelete(null);
    }

    const HandlerLinkDelete = (e) => {
        LinkDelete(LinkToRemove);
    }

    return( 
        
        <Layout>
        <div className="row">
            <div className="col">
                <h1>Links</h1>
            </div>
            <div className="col text-right align-self-bottom pt-2">
                <Link to="/manage/links/create" className="btn btn-primary">
                    Add
                </Link>
            </div>
        </div>
        {links && links.length  ? links.map(link => {

            const deleteLink = (e) => setLinkDelete(link)
            const border = (LinkToRemove && LinkToRemove.id === link.id ? 'border border-danger rounded' : 'border border-transparent')

            return (
                <div key={link.id}className= {`pb-2 pt-2 pl-3 pr-3 d-flex flex-row justify-content-between ${border}`}>
                <div className="pr-3">
                    <img src="https://via.placeholder.com/100" alt=""/>
                </div>
                <div className="align-self-center">
                    <span className="text-primary clearfix">{link.label}</span>
                    <span className="text-primary clearfix">{link.url}</span>
                </div>
                <div className="ml-auto p-2 clearfix">
                    <Link to={`/manage/links/edit/${link.id}`}> EDIT </Link>
                    <button  className="btn btn-exit" onClick={deleteLink}>DELETE</button>

                </div>
            </div>   
            )

        }) : null}

        {LinkToRemove ? (
            <div className="alert alert-danger rounded  modal-center shadow-bold">
                <h4 className="alert-heading">Delete Confirmation!</h4>
                <p>Are you sure you want delete, this action connot be undone.</p>
                <hr/>
                <div className="d-flex justify-content-between">
                    <button className="btn btn-outline-light" onClick={cancelDelete}>cancel</button>
                    <button className="btn btn-danger" onClick={HandlerLinkDelete}>delete</button>
                </div>
            </div>
        ) : null}
            
        </Layout>
    )
}


const mapStateToProps = (state) => {
    return { links: state.link.links ,
        LinkToRemove : state.link.LinkToRemove}
}

export default  connect(mapStateToProps, {LinkList, setLinkDelete, LinkDelete})(Links) ; 
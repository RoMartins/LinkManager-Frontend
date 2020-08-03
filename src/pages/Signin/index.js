import React, { useEffect } from 'react';

import { Link, Redirect } from 'react-router-dom';
import { connect } from 'react-redux'
import {signInAction} from '../../actions/accountActions'
import { getFormData } from '../../helpers/form';
import ErroMessage from '../components/ErrorsMessage';




const SignIn = ({account, signInAction, erro}) => {
    //const {account, signInAction, erro} = props;

    if(account) {
        return <Redirect to="/manage/links" />
    }

    const HandlerLogin = (e) => { 
        e.preventDefault();

        const data = getFormData(e)

        signInAction(data)
    }
    
    return(
        <div className="container h-100 pt-5">
        
        
            <h1>Sign In</h1>
            <div className="d-flex flex column h-100">
                <form onSubmit={HandlerLogin}>
                    <div className="form-group">
                        <label>Email</label>
                        <input type="text" className="form-control" name="email"/>
                    </div>

                    <div className="form-group">
                        <label>Password</label>
                        <input type="password" className="form-control" name="password"/>
                    </div>
                    <div>
                        <button className="btn btn-primary btn-round">Submit</button>
                    </div>
                </form>
                <div className="container text-center fixed-bottom pb-5">
                    <div className="text-muted"> Don't have an Account ?</div>
                    <Link to='/sign-in'>Sign Up</Link>
                </div>
            </div>
        </div>
    )

 
}



const mapStateToProps = (state) => {
    return { account: state.account.account,
            erro : state.account.erro}
}

export default connect(mapStateToProps, {signInAction})(SignIn) ; 
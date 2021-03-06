import React from 'react';
import { Link, Redirect } from 'react-router-dom';
import { connect } from 'react-redux'
import {signUpAction} from '../../actions/accountActions'
import { getFormData } from '../../helpers/form';

const SignUp = (props) => {

    const {signUpAction, account } = props; 

    const HandleSignUp = (e) => {
        e.preventDefault();
        const data = getFormData(e);

        signUpAction(data);
    }

    if(account) {
        return <Redirect to="/manage/links" />
    }

    return(
        <div className="container h-100 pt-5">
            <h1>Sign Up</h1>
            <div className="d-flex flex column h-100">
                <form onSubmit={HandleSignUp}>
                    <div className="form-group">
                        <label>Email</label>
                        <input type="text" className="form-control" name="email"/>
                    </div>

                    <div className="form-group">
                        <label>Password</label>
                        <input type="password" className="form-control" name="password"/>
                    </div>

                    <div className="form-group">
                        <label>Password Confirmation</label>
                        <input type="password" className="form-control" name="password_confirmation"/>
                    </div>

                    <div>
                        <button className="btn btn-primary btn-round">Submit</button>
                    </div>
                </form>
                <div className="container text-center fixed-bottom pb-5">
                    <div className="text-muted"> Already have an Account ?</div>
                    <Link to='/sign-in'>Sign In</Link>
                </div>
            </div>
        </div>
    )
}

const mapStateToProps = (state) => {
    return { account: state.account.account }
}

export default connect(mapStateToProps, {signUpAction})(SignUp) ; 
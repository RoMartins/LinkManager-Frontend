import React, { useEffect } from 'react';
import {BrowserRouter, Switch, Route, Link} from 'react-router-dom' 

import SignIn from "./pages/Signin"
import SignUp from "./pages/Signup"
import Links from "./pages/Manage/Links"
import CreateLink from "./pages/Manage/Links/Create"
import EditLink from "./pages/Manage/Links/Edit"
import Home from "./pages/Home"
import { checkLogged } from './actions/accountActions';
import { connect } from 'react-redux';


const App = ({checkLogged}) => {
  useEffect(()=> {
    checkLogged();
  }, [checkLogged])

  
  return (
    <BrowserRouter>
      <div>
        <nav>
          <ul className="list-group list-group-horizontal">
            <li className="list-group-item"> <Link to="/sign-in"> Sign in</Link> </li>
            <li className="list-group-item"> <Link to="/sign-up"> Sign up</Link> </li>
            <li className="list-group-item"> <Link to="/manage/links"> links</Link> </li>
            <li className="list-group-item"> <Link to="/manage/links/create"> create</Link> </li>
            <li className="list-group-item"> <Link to="/manage/links/edit"> Edit</Link> </li>

          </ul>
        </nav>
        <Switch>

          <Route path="/sign-in">
            <SignIn />
          </Route>

          <Route path="/sign-up">
            <SignUp />
          </Route>

          <Route path="/manage/links/create">
            <CreateLink />
          </Route>

          <Route path="/manage/links/edit">
            <EditLink />
          </Route>

          <Route path="/manage/links">
            <Links />
          </Route>

          <Route path="/">
            <Home />
          </Route>

       

          

        </Switch>
      </div>
    
    
    </BrowserRouter>
  )
}


const mapStateToProps = (state) => {
  return { account: state.account.account }
}

export default connect(mapStateToProps, {checkLogged})(App) ; 
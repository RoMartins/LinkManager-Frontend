import React from 'react';
import {BrowserRouter, Switch, Route, Link} from 'react-router-dom' 

const App = () => {
  return (
    <BrowserRouter>
      <div>
        <nav>
          <ul>
            <li> <Link to="/sign-in"> Sign in</Link> </li>
            <li> <Link to="/sign-up"> Sign up</Link> </li>
          </ul>
        </nav>
        <Switch>
          
          <Route path="/sign-in">
            <h1>SignIn</h1>
          </Route>

          <Route path="/sign-up">
            <h1>Signup</h1>
          </Route>

        </Switch>
      </div>
    
    
    </BrowserRouter>
  )
}

export default App;
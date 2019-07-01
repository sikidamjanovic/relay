import React from 'react';
import { BrowserRouter as Router, Route } from 'react-router-dom';
import Navigation from '../Navigation'
import LandingPage from '../Landing'
import SignUpPage from '../SignUp';
import SignInPage from '../SignIn';
import PasswordForgetPage from '../PasswordForget';
import HomePage from '../Home';
import AccountPage from '../Account';
import AdminPage from '../Admin'

const App = () => (
  <Router>
      <div style={styles.appStyle}>
          <Navigation/>
          <Route exact path="/" component={LandingPage}/>
          <Route path="/signin" component={SignInPage}/>
          <Route path="/signup" component={SignUpPage}/>
          <Route path="/pw-forget" component={PasswordForgetPage}/>
          <Route path="/home" component={HomePage}/>
          <Route path="/account" component={AccountPage}/>
          <Route path="/admin" component={AdminPage}/>
      </div>
  </Router>
);

const styles = {
    appStyle: {
        minHeight: '100vh',
        backgroundColor: '#FAFAFA'
    }
}

export default App;
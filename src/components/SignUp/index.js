import React, { Component } from 'react';
import { Link } from 'react-router-dom';
import { FirebaseContext } from '../Firebase';

const SignUpPage = () => (
  <div>
    <h1>Sign Up</h1>
    <FirebaseContext.Consumer>
      {firebase => <SignUpForm firebase={firebase} />}
    </FirebaseContext.Consumer>
  </div>
);

class SignUpForm extends Component {
  constructor(props) {
    super(props);
    this.state = {
        username: '',
        email: '',
        passwordOne: '',
        passwordTwo: '',
        error: null
    }
  }

  onSubmit = event => {
    const { username, email, passwordOne } = this.state;

    this.props.firebase
      .doCreateUserWithEmailAndPassword(email, passwordOne)
      .then(authUser => {
        this.setState({
            username: '',
            email: '',
            passwordOne: '',
            passwordTwo: '',
            error: null
         });
      })
      .catch(error => {
        this.setState({ error });
      });

    event.preventDefault();
  }

  onChange = event => {
    this.setState({ [event.target.name]: event.target.value });
  };

  render() {
    const {
        username,
        email,
        passwordOne,
        passwordTwo,
        error,
    } = this.state;

    const isInvalid =
        passwordOne !== passwordTwo ||
        passwordOne === '' ||
        email === '' ||
        username === '';

    return (
      <form onSubmit={this.onSubmit}>
        <input
          name="username"
          value={username}
          onChange={this.onChange}
          type="text"
          placeholder="Full Name"
        />
        <input
          name="email"
          value={email}
          onChange={this.onChange}
          type="text"
          placeholder="Email Address"
        />
        <input
          name="passwordOne"
          value={passwordOne}
          onChange={this.onChange}
          type="password"
          placeholder="Password"
        />
        <input
          name="passwordTwo"
          value={passwordTwo}
          onChange={this.onChange}
          type="password"
          placeholder="Confirm Password"
        />
        <button disabled={isInvalid} type="submit">Sign Up</button>

        {error && <p>{error.message}</p>}
      </form>
    );
  }
}

const SignUpLink = () => (
  <p>
    Don't have an account? <Link to='/signup'>Sign Up</Link>
  </p>
);

export default SignUpPage;

export { SignUpForm, SignUpLink };
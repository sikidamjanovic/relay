import React, { Component } from 'react';

class SignUpPage extends Component {
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
  }

  onChange = event => {
    this.setState({ [event.target.name]: event.target.value });
  };

  render() {
    return (
      <div style = {styles.formContainer}>
        <h1 style = {styles.headerStyle}>Sign Up</h1>
        <form style = {styles.formStyle} onSubmit={this.onSubmit}>
            <input
                style={styles.inputStyle}
                name="username"
                onChange={this.onChange}
                type="text"
                placeholder="Full Name"
            />
            <input
                style={styles.inputStyle}
                name="email"
                onChange={this.onChange}
                type="text"
                placeholder="Email Address"
            />
            <input
                style={styles.inputStyle}
                name="passwordOne"
                onChange={this.onChange}
                type="password"
                placeholder="Password"
            />
            <input
                style={styles.inputStyle}
                name="passwordTwo"
                onChange={this.onChange}
                type="password"
                placeholder="Confirm Password"
            />
            <button 
                type="submit"
                style={styles.buttonStyle}>
                SIGN UP
            </button>
        </form>
      </div>
    );
  }
}

const styles = {
    formContainer:{
        width: '100%',
        height: '80vh',
        borderRadius: 10,
        backgroundColor: '#FAFAFA',
        display: 'flex',
        flexDirection: 'column',
        paddingTop: '10vh',
        alignItems: 'center'
    },
    formStyle: {
        display: 'flex',
        width: '400px',
        flexDirection: 'column'
    },
    inputStyle: {
        fontFamily: 'merriweather',
        padding: 20,
        fontSize: '12pt',
        margin: 5,
        borderRadius: 10,
        border: 'none',
        boxShadow: '-1px 0 5px 0 rgba(0, 0, 0, .1)'
    },
    buttonStyle: {
        backgroundColor: '#C76161',
        color: 'white',
        marginTop: 40,
        fontWeight: 'bold',
        fontSize: '12pt',
        height: 50,
        borderRadius: 10,
        border: 'none',
        boxShadow: '-1px 0 5px 0 rgba(0, 0, 0, .1)'
    },
    headerStyle: {
        fontFamily: 'merriweather',
        color: '#454545'
    }
}

export default SignUpPage;
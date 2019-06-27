import React from 'react';
import { Link } from 'react-router-dom';

const Navigation = () => (
  <div style = {styles.navBarStyle}>
    <ul>
      <li style={styles.listStyle}>
        <Link 
            style={styles.textStyle} 
            to='/'>
            Home
        </Link>
      </li>
      <li style={styles.listStyle}>
        <Link 
            style={styles.textStyle} 
            to='/signin'>
            Sign In
        </Link>
      </li>
      <li style={styles.listStyle}>
        <Link 
            style={styles.textStyle} 
            to='/signup'>
            Sign Up
        </Link>
      </li>
    </ul>
  </div>
);

const styles = {
    navBarStyle: {
        height: '10vh',
        display: 'flex',
        justifyContent: 'flex-end',
        alignItems: 'center',
        flexDirection: 'row',
        backgroundColor: '#FAFAFA'
    },
    listStyle: {
        display: 'inline',
        padding: 20,
    },
    textStyle: {
        textDecoration: 'none',
        color: '#454545',
        fontFamily: 'merriweather'
    }
}

export default Navigation;
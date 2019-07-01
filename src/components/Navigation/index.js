import React from 'react';
import { Link } from 'react-router-dom';

const Navigation = () => (
    <div style = {styles.navBarStyle}>

        <div style={styles.appNameContainerStyle}>
            <h4 style= {styles.appNameStyle}>CoAuthor</h4>
        </div>

        <input style = {styles.searchStyle} placeholder="Search some shit"/>

        <ul style = {styles.listContainer}>
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
        height: 70,
        marginBottom: 30,
        display: 'flex',
        justifyContent: 'center',
        alignItems: 'center',
        flexDirection: 'row',
        backgroundColor: '#FAFAFA'
    },
    listStyle: {
        display: 'inline',
        padding: 20
    },
    listContainer: {
        flexBasis: '33%',
        display: 'flex',
        justifyContent: 'flex-end'
    },
    textStyle: {
        textDecoration: 'none',
        color: '#454545',
        fontFamily: 'merriweather'
    },
    searchStyle: {
        flexBasis: '33%',
        border: 'none',
        height: 35,
        borderRadius: 8,
        boxShadow: '-1px 0 5px 0 rgba(0, 0, 0, .1)'
    },
    appNameContainerStyle: {
        display: 'flex',
        justifyContent: 'center',
        flexBasis: '34%'
    },
    appNameStyle: {
        fontFamily: 'merriweather'
    }
}

export default Navigation;
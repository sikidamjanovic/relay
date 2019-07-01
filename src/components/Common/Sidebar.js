import React, { Component } from 'react'

class SideBar extends Component {
    render() { 
        return(
            <div style={styles.sideBarStyle}>
                <p>Categories</p>
                <ul>
                    <li>Comedy</li>
                    <li>Sci-Fi</li>
                    <li>Romance</li>
                    <li>War</li>
                    <li>Drama</li>
                </ul>
                <p>Some Other List</p>
                <ul>
                    <li>Comedy</li>
                    <li>Sci-Fi</li>
                    <li>Romance</li>
                    <li>War</li>
                    <li>Drama</li>
                </ul>
            </div>
        )
    }
}

const styles = {
    sideBarStyle: {
        backgroundColor: 'white',
        height: '300px',
        borderRadius: 8,
        boxShadow: '0 10px 20px rgba(0,0,0,0.10), 0 6px 6px rgba(0,0,0,0.10)'
    }
}

export default SideBar

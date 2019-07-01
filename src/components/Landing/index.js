import React from 'react';
import Post from '../Common/Post'
import Sidebar from '../Common/Sidebar'

const Landing = () => (
  <div style={styles.containerStyle}>
      <div style={styles.sideBarContainerStyle}>
        <Sidebar/>
      </div>
      <div style ={styles.postContainerStyle}>
        <Post/>
        <Post/>
        <Post/>
      </div>
  </div>
);

const styles = {
    containerStyle: {
        display: 'flex',
        justifyContent: 'center',
    },
    postContainerStyle:{
        maxWidth: 1000,
        flexBasis: '60%',
        display: 'flex',
        flexDirection: 'column',
        alignContent: 'space-evenly',
        margin: 20
    },
    sideBarContainerStyle: {
        flexBasis: '20%',
        margin: 20,
        maxWidth: 300,
    }
}

export default Landing;
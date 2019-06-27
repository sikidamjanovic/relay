import React from 'react';

const Landing = () => (
  <div style={styles.containerStyle}>
      <h1 style={styles.headerStyle}>Some Content</h1>
  </div>
);

const styles = {
    containerStyle: {
        height: '90vh',
        backgroundColor: '#FAFAFA',
        display: 'flex',
        alignItems: 'center',
        justifyContent: 'center'
    },
    headerStyle: {
        fontFamily: 'merriweather',
        padding: 0,
        margin: 0
    }
}

export default Landing;
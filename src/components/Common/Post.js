import React, { Component } from 'react';
import profile1 from '../../img/profile1.jpg'
import { MdFavorite, MdFavoriteBorder, MdComment, MdBookmarkBorder, MdShare } from 'react-icons/md';

class Post extends Component {
    state = {  }
    render() { 
        return (
            <div style={styles.postContainer}>
                <div style={styles.main}>

                    <div style={styles.headerContainer}>
                        <h1 style={styles.titleStyle}>Title Goes Here</h1>
                        <p style={styles.genreTextStyle}>Genre / Writing Prompt</p>
                    </div>
                    
                    <hr style={styles.breakStyle}></hr>

                    <p style={styles.bodyTextStyle}>
                        Lorem ipsum dolor sit amet, consectetur adipiscing elit, 
                        sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. 
                        Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris 
                        nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in 
                        reprehenderit in voluptate velit esse cillum dolore eu fugiat 
                        nulla pariatur. <span style={styles.readMore}>Read More ...</span>
                    </p>
                    <hr style={styles.breakStyle}></hr>
                    
                    <div style={styles.footerStyle}>
                        <div style={styles.postStatistics}>

                            <div style={styles.statContainer}>
                                <img style={styles.profilePicture} src={profile1} alt="profile"/>
                                <p style={styles.statTextStyke}>Username</p>
                            </div>

                            <div style={styles.statContainer}>
                                <MdFavorite color="#C76161"/>
                                <p style={styles.statTextStyke}>594</p>
                            </div>


                            <div style={styles.statContainer}>
                                <MdComment color="#7f8c8d"/>
                                <p style={styles.statTextStyke}>234</p>    
                            </div>
                            
                            <div style={styles.statContainer}>
                                <MdBookmarkBorder color="#95a5a6"/>
                            </div>
                            
                            <div style={styles.statContainer}>
                                <MdShare color="#95a5a6"/>
                            </div>
                            
                        </div>

                        <div style={styles.postButtonsContainer}>
                            <MdFavoriteBorder style={styles.postButtonStyle}/>
                            <MdComment style={styles.postButtonStyle}/>
                        </div>
                    </div>

                </div>
            </div>
        );
    }
}

const styles = {
    postContainer: {
        padding: '10px 10px 0px 10px',
        marginBottom: 30,
        backgroundColor: 'white',
        borderRadius: 8,
        boxShadow: '0 10px 20px rgba(0,0,0,0.10), 0 6px 6px rgba(0,0,0,0.10)'
    },
    main:{
        margin: 10,
        backgroundColor: 'white',
        borderRadius: '0px 10px 10px 0px'
    },
    headerContainer:{
        display: 'flex',
        flexDirection: 'column'
    },
    titleStyle: {
        fontFamily: 'Merriweather',
        fontWeight: 'bold',
        fontSize: '16pt',
        margin: 0
    },
    genreTextStyle:{
        fontFamily: 'Avenir',
        color: 'rgb(150,150,150)',
        fontSize: '10pt',
        margin: '10px 0px 5px 0px'
    },
    bodyTextStyle: {
        fontFamily: 'Avenir',
        lineHeight: 2,
        fontSize: '11pt',
        color: 'rgb(100, 100, 100)'
    },
    readMore:{
        color: '#2980b9'
    },
    breakStyle:{
        border: '1px solid rgb(250,250,250)',
        borderRadius: 8
    },
    footerStyle:{
        display: 'flex'
    },
    profilePicture:{
        height: 25,
        width: 25,
        borderRadius: 45,
        backgroundSize: 'cover',
        boxShadow: '0 10px 20px rgba(0,0,0,0.10), 0 6px 6px rgba(0,0,0,0.10)'
    },
    postStatistics:{
        display: 'flex',
        flexDirection: 'row',
        alignItems: 'center',
        justifyContent: 'space-between',
        width: '60%'
    },
    statTextStyke:{
        marginLeft: 6,
        fontFamily: 'Avenir Next',
        fontSize: '11pt'
    },
    iconStyle: {
        width: 25,
        height: 25
    },
    statContainer:{
        display: 'flex',
        flexDirection: 'row',
        alignItems: 'center'
    },
    postButtonsContainer:{
        width: '40%',
        display: 'flex',
        flexDirection: 'row',
        alignItems: 'center',
        justifyContent: 'flex-end'
    },
    postButtonStyle:{
        fontSize: 25,
        padding: 10,
        color: '#7f8c8d'
    }
}
 
export default Post;
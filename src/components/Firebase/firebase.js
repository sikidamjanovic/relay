import app from 'firebase/app'
import 'firebase/auth'

const config = {
    apiKey: "AIzaSyC-1qE_pSDh3kKMmLI3fA4iErj4qGuZrgw",
    authDomain: "writingrelay.firebaseapp.com",
    databaseURL: "https://writingrelay.firebaseio.com",
    projectId: "writingrelay",
    storageBucket: "",
    messagingSenderId: "549963888326",
    appId: "1:549963888326:web:65281ab754acef09"
}

class Firebase{
    constructor() {
        app.initializeApp(config)
        this.auth = app.auth()
    }

    // Auth Api
    doCreateUserWithEmailAndPassword = (email, password) =>
        this.auth.createUserWithEmailAndPassword(email,password);
      
    doSignInWithEmailAndPassword = (email, password) =>
        this.auth.signInWithEmailAndPassword(email, password);
    
    doSignOut = () => this.auth.signOut();

    doPasswordReset = email => this.auth.sendPasswordResetEmail(email);

    doPasswordUpdate = password =>
        this.auth.currentUser.updatePassword(password);
}

export default Firebase
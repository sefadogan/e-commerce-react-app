import firebase from 'firebase/app';
import 'firebase/firestore';
import 'firebase/auth';

const config = {
    apiKey: "AIzaSyAuklQ62eRC1QD7FWBIfhX5WBSFGER_RHw",
    authDomain: "react-app-e-commerce-db.firebaseapp.com",
    databaseURL: "https://react-app-e-commerce-db.firebaseio.com",
    projectId: "react-app-e-commerce-db",
    storageBucket: "react-app-e-commerce-db.appspot.com",
    messagingSenderId: "327088575526",
    appId: "1:327088575526:web:04f2ac8c28d18e8264c2e7"
};

export const createUserProfileDocument = async (userAuth, additionalData) => {
    if (!userAuth) return;

    const userRef = firestore.doc(`users/${userAuth.uid}`);

    const snapShot = await userRef.get();
    if (!snapShot.exists) {
        const { displayName, email } = userAuth;
        const createdAt = new Date();

        try {
            await userRef.set({
                displayName,
                email,
                createdAt,
                ...additionalData
            })
        } catch (error) {
            console.log("An unexpected error occured while creating user. Exception message: " + error.message)
        }
    }

    return userRef;
}

firebase.initializeApp(config);

export const auth = firebase.auth();
export const firestore = firebase.firestore();

const provider = new firebase.auth.GoogleAuthProvider();
provider.setCustomParameters({ prompt: 'select_account' });
export const signInWithGoogle = () => auth.signInWithPopup(provider);

export default firebase;
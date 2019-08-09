import firebase from 'firebase'
var config = {
  apiKey: "AIzaSyBAipWxMQj0V-baXr0egMp0ah4Iylg2EOo",
  authDomain: "logicalthinkingpractice-7911b.firebaseapp.com",
  databaseURL: "https://logicalthinkingpractice-7911b.firebaseio.com",
  projectId: "logicalthinkingpractice",
  storageBucket: "logicalthinkingpractice.appspot.com",
  messagingSenderId: "415976018347"
};
firebase.initializeApp(config);

export const provider = new firebase.auth.GoogleAuthProvider();
export const auth = firebase.auth();
export default firebase;

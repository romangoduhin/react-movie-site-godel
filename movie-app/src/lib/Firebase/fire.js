import firebase from 'firebase';

const firebaseConfig = {
  apiKey: 'AIzaSyCcEcLKClNX7UJHivcn9Xp8vftDRtyd3fI',
  authDomain: 'react-movie-site.firebaseapp.com',
  databaseURL: 'https://react-movie-site.firebaseio.com',
  projectId: 'react-movie-site',
  storageBucket: 'react-movie-site.appspot.com',
  messagingSenderId: '610854587578',
  appId: '1:610854587578:web:1b3b781d04bb662cd7c683',
};

firebase.initializeApp(firebaseConfig);

export default firebase;

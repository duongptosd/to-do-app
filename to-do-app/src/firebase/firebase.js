import firebase from 'firebase/app';
import 'firebase/firestore';

// const config = {
//   apiKey: process.env.REACT_APP_API_KEY,
//   authDomain: process.env.REACT_APP_AUTH_DOMAIN,
//   databaseURL: process.env.REACT_APP_DATABASE_URL,
//   projectId: process.env.REACT_APP_PROJECT_ID,
//   storageBucket: process.env.REACT_APP_STORAGE_BUCKET,
//   messagingSenderId: process.env.REACT_APP_MESSAGING_SENDER_ID,
//   appId: "app-id"
// };

const config = {
    apiKey: "AIzaSyD0sdY149Q4n9QB1Ws-b-99DyNflsa6ABY",
    authDomain: "todo-app-4ae9f.firebaseapp.com",
    databaseURL: "https://todo-app-4ae9f.firebaseio.com",
    projectId: "todo-app-4ae9f",
    storageBucket: "todo-app-4ae9f.appspot.com",
    messagingSenderId: "1036192215090",
    appId: "1:1036192215090:web:50a328863017a937c1cc2b",
    measurementId: "G-0ETE3RLZPF"
}

firebase.initializeApp(config);
const app = firebase.firestore();

export default app;
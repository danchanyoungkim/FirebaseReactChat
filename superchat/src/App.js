import React from "react";
import './App.css';

import firebase from 'firebase/app';
import 'firebase/firestore';
import 'firebase/auth';

import { useAuthState } from 'react-firebase-hooks/auth';
import { useCollectionData } from 'react-firebase-hooks/firestore';

firebase.initializeApp({
  apiKey: "AIzaSyDRQFWs0v4dwnMoMeTThxR-hw_bG-KjUss",
  authDomain: "fir-reactchat-a698d.firebaseapp.com",
  projectId: "fir-reactchat-a698d",
  storageBucket: "fir-reactchat-a698d.appspot.com",
  messagingSenderId: "451631591097",
  appId: "1:451631591097:web:6542b2473b3f9006cbf568",
  measurementId: "G-LWRPF44E4L"
})

const auth = firebase.auth();
const firestore = firebase.firestore();

function App() {
  return (
    <div className="App">
      <header className="App-header">
       
      </header>
    </div>
  );
}

export default App;

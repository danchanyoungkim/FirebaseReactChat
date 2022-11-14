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

const [user] = useAuthState(auth);

function App() {
  return (
    <div className="App">
      <header>

      </header>

      <section>
        {user ? <ChatRoom /> : <SignIn />}
      </section>
    </div>
  );
}

function SignIn() {
  const signInWithGoogle = () => {
    const provider = new firebase.auth.GoogleAuthProvider();
    auth.signInWithPopup(provider);
  }

  return (
    <>
      <button onClick={signInWithGoogle}>Sign in with Google</button>
    </>
  )

}

function SignOut() {
  return auth.currentUser && (

    <button onClick={() => auth.signOut()}>Sign Out</button>
  )
}

function ChatRoom() {

  const messagesRef = firestore.collection('messages');
  const query = messagesRef.orderBy('createdAt').limit(25);

  const [messages] = useCollectionData(query, { idField: 'id' });
}

function ChatMessage(props) {

  return <p></p>
}

return (
  <>
    <div>
      {messages && messages.map(mes => <ChatMessage key={msg.id} message={msg} />)}
    </div>
  </>
)

function ChatMessage(props) {
  const { text, uid } = props.message;

  return <p>{text}</p>
}

export default App;

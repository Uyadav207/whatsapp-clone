import React, { useState, useEffect } from 'react'
import { Avatar, IconButton } from '@material-ui/core'
import '../CSS/Chat.css'
import MoreVertIcon from '@material-ui/icons/MoreVert';
import SearchOutlinedIcon from '@material-ui/icons/SearchOutlined';
import AttachFile from '@material-ui/icons/AttachFile';
import InsertEmoticonIcon from '@material-ui/icons/InsertEmoticon'
import MicIcon from '@material-ui/icons/Mic'
import { useParams } from 'react-router-dom';
import db from '../firebase';
import { useStateValue } from '../Reducer/StateProvider';
import firebase from '../firebase'
import { firestore } from 'firebase';

function Chat() {

    const [input, setInput] = useState('');
    const [seed, setSeed] = useState('');
    const {roomId} = useParams();
    const [roomName, setRoomName] = useState("")
    const [messages, setMessages] = useState([])
    const [{user}, dispatch] = useStateValue();

    useEffect(() => {
        if(roomId) {
            db.collection('rooms')
            .doc(roomId)
            .onSnapshot((snapshot) => 
                setRoomName(snapshot.data().name)
            );
            db.collection('rooms')
            .doc(roomId)
            .collection("messages")
            .orderBy('timestamp', 'asc')
            .onSnapshot((snapshot) => 
            setMessages(snapshot.docs.map((doc) => doc.data()))
            );
        }
    }, [roomId])

    useEffect(() => {
       setSeed(Math.floor(
            Math.random() * 5000
        ))
    },[roomId])
    
    const sendMessage = (e) => {
        e.preventDefault();
        console.log("you types >>> ", input);
        db.collection('rooms')
        .doc(roomId)
        .collection('messages').add({
            message: input,
            name: user.displayName,
            timestamp: firebase.firestore.Fieldvalue.serverTimestamp()
        });
        setInput('');
    }

    return (
        <div className="chat" >
            <div className="chat_header">
                <Avatar src={`https://avatars.dicebear.com/api/human/${seed}.svg`} />
            <div className="chat_headerInfo">
                <h3>{roomName}</h3>
                <p>Last Seen</p>
            </div>
            <div className="chat_headerRight">
            <IconButton>
                <SearchOutlinedIcon />
            </IconButton>
            <IconButton>
                <AttachFile />
            </IconButton>
            <IconButton>
                <MoreVertIcon />
            </IconButton>
            </div>
            </div>
            <div className="chat_body">
                {messages.map((message) => (
                <p className={`chat_message ${true && 'chat_reciever'}`}>
                <span className="chat_name">{message.name}</span>
                {message.message}
                <span className="chat_timestamp" >
                    {new Date(message.timestamp?.toDate()).toUTCString()}
                </span>
                </p>
            ))}  
            </div>
            <div className="chat_footer">
            <IconButton>
                <InsertEmoticonIcon />
            </IconButton>
               <form>
                   <input 
                    value = {input}
                    onChange={(e) => setInput(e.target.value)}
                    placeholder="Type a message"
                    type="text"
                   />
                   <button 
                   onClick={sendMessage}
                   type="submit"
                   > Send a message </button>
               </form>
               <IconButton>
               <MicIcon />
               </IconButton>
            </div>
        </div>
    )
}

export default Chat

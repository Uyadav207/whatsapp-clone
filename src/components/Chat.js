import React, { useState, useEffect } from 'react'
import { Avatar, IconButton } from '@material-ui/core'
import '../CSS/Chat.css'
import MoreVertIcon from '@material-ui/icons/MoreVert';
import SearchOutlinedIcon from '@material-ui/icons/SearchOutlined';
import AttachFile from '@material-ui/icons/AttachFile';
import InsertEmoticonIcon from '@material-ui/icons/InsertEmoticon'
import MicIcon from '@material-ui/icons/Mic'

function Chat() {

    const [input, setInput] = useState('');
    const [seed, setSeed] = useState('');

    useEffect(() => {
       setSeed(Math.floor(
            Math.random() * 5000
        ))
    },[])
    
    const sendMessage = (e) => {
        e.preventDefault();
        console.log("you types >>> ", input);
        setInput('');
    }

    return (
        <div className="chat" >
            <div className="chat_header">
                <Avatar src={`https://avatars.dicebear.com/api/human/${seed}.svg`} />
            <div className="chat_headerInfo">
                <h3>Room Name</h3>
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
                <p className={`chat_message ${true && 'chat_reciever'}`}>
                <span className="chat_name">Utkarsh</span>
                Hello Guys making whatsapp Clone
                <span className="chat_timestamp" >
                3:53pm
                </span>
                </p>        
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

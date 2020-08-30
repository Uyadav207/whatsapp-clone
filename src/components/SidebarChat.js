import React from 'react'
import '../CSS/sidebarChat.css'
import { Avatar, IconButton, Input } from '@material-ui/core'


function SidebarChat() {
    return (
        <div className="sidebarChat" >
           <Avatar src="https://avatars.dicebear" />
           <div className="sidebarChat_info" >
               <h2>Room Name</h2>
               <p>Last Message</p>
           </div>
        </div>
    )
}

export default SidebarChat

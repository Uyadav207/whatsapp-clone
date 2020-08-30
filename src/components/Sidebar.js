import React from 'react'
import '../CSS/Sidebar.css'
import { Avatar, IconButton, Input } from '@material-ui/core'
import DonutLargeIcon from '@material-ui/icons/DonutLarge';
import ChatIcon from '@material-ui/icons/Chat';
import MoreVertIcon from '@material-ui/icons/MoreVert';
import SearchOutlinedIcon from '@material-ui/icons/SearchOutlined';
import SidebarChat from '../components/SidebarChat'

function Sidebar() {
    return (
        <div className="sidebar">
            <div className="sidebar_header">
                <Avatar />
            <div className="sidebar_headerRight" >
            <IconButton>
                <DonutLargeIcon />
            </IconButton>
            <IconButton>
                <ChatIcon />
            </IconButton>
            <IconButton>
                <MoreVertIcon />
            </IconButton>
            </div>
            </div>
            <div className="sidebar_search">
             <div className="sidebar_searchContainer" >
             <SearchOutlinedIcon />
                <Input className="mar"
                    placeholder="Search or start new chat"
                    type="text"
                />
             </div>
            </div>
            <div className="sidebar_Chats">
             <SidebarChat addNewChat />
             <SidebarChat />
             <SidebarChat />
             <SidebarChat />
             <SidebarChat />
             <SidebarChat />
             <SidebarChat />
             <SidebarChat />
             <SidebarChat />
             <SidebarChat />
             <SidebarChat />
             <SidebarChat />

            </div>
        </div>
    )
}

export default Sidebar

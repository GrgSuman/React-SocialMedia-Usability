import React, { useContext } from 'react'
import {ClickContext,actionType} from '../../Global/GlobalState'
import {NavLink} from 'react-router-dom'
import './Chat.css'

const Chat=()=> {
  const[state,dispatch]=useContext(ClickContext)

  const removeSlideCategory =()=>{
    return dispatch({type:actionType.CLICK_CHAT,payload:!state.chatClicked})
}

    return (
        
        <div className="settings">
          <i className="fas fa-arrow-left backBtn"  onClick={removeSlideCategory}></i>

          <h3>Chats</h3>  

          <div className="users_settings chat_users">
            
         {state.posts.chats.map((val)=>{
           return <div key={val.username}>
             <NavLink to="/" > 
           <img src={val.userProfileImage} alt="user" height="40px" width="40px"/>
           <span className="main__">
           <span className="main_name"> {val.username} </span>
           <span className="main_chat">you: {val.lastMessage} </span>
           </span>
            </NavLink>
           </div>
         })}
    
          </div>

          <button className="logout ">See More</button>

        </div>
    )
}

export default Chat

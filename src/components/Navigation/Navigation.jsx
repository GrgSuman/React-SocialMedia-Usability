import React, { useContext,useEffect, useState } from 'react'
import {NavLink} from 'react-router-dom'
import {ClickContext,actionType} from '../../Global/GlobalState'
import Settings from '../Settings/Settings'
import Notification from '../Notifications/Notification'
import './Navigation.css'
import Chat from '../Chats/Chat'

const Navigation=()=> {
    const[state,dispatch]=useContext(ClickContext)

    useEffect(()=>{
    document.documentElement.style.setProperty("font-size",localStorage.getItem("fontSize")+"%");
    },[])

    const[displayStatus,setdisplayStatus]=useState(false)

    const myTab = ()=>{
        setdisplayStatus(!displayStatus)
    }

    const removeTopLayerPopup =()=>{
        if(state.categoryClicked){
        return dispatch({type:actionType.CLICK_MENU,payload:!state.categoryClicked})
        }
    
        if(state.profileClicked){
            return dispatch({type:actionType.CLICK_PROFILE,payload:!state.profileClicked})
        }

        if(state.notificationClicked){
            return dispatch({type:actionType.CLICK_NOTIFICATION,payload:!state.notificationClicked})
        }

        if(state.chatClicked){
            return dispatch({type:actionType.CLICK_CHAT,payload:!state.chatClicked})
        }
    }
    return (
        <div className="navigation" >

            <div className="optionsMenu" style={{"display":displayStatus?"block":"none"}}>
            <ul className="navContents">

                <li> <NavLink to="/"> <i className="fas fa-home"></i> Hot</NavLink></li>
                <li> <NavLink to="/"> <i className="fas fa-chart-line"></i> Trending</NavLink></li>
                <li> <NavLink to="/"> <i className="fas fa-random"></i> Random</NavLink></li>
                <li> <NavLink to="/"><i className="far fa-heart"></i> Favourites</NavLink></li>
               
           </ul>
            </div>
        
            <nav onClick={removeTopLayerPopup}>
                <section className="logo">
                <i className="fas fa-bars" onClick={()=>dispatch({type:actionType.CLICK_MENU,payload:!state.categoryClicked})}></i>
                 <h2> <NavLink to="/"> LaughLoud</NavLink> </h2>
                 
                 <div className="activeNav" onClick={myTab}>
                     <section><span><i className="fas fa-home" style={{"marginRight":"10px"}}></i> Hot</span> <i className="fas fa-caret-down"></i></section>
                 </div>
                </section>

                <section className="search">
                  <input type="text" placeholder="Search trending memes.."/>
                  <i className="fas fa-search"></i>
                </section>

                <section className="rightNav">
                <i className="far fa-bell" onClick={()=>dispatch({type:actionType.CLICK_NOTIFICATION,payload:!state.notificationClicked})}></i>
                <i className="far fa-comment" onClick={()=>dispatch({type:actionType.CLICK_CHAT,payload:!state.chatClicked})}></i>
                <img onClick={()=>dispatch({type:actionType.CLICK_PROFILE,payload:!state.profileClicked})} src="https://images.unsplash.com/photo-1610697160852-8507f0db7b97?ixid=MXwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHw%3D&ixlib=rb-1.2.1&auto=format&fit=crop&w=700&q=80" alt="user-profile"/>
                </section>
            </nav>

           
            {/* <section className="mainTabs">
                <div className="tab activeTab" id="1" ><i className="fas fa-home"></i></div>
                <div className="tab " id="2"><i className="fas fa-chart-line"></i></div>
                <div className="tab " id="3"><i className="fas fa-random"></i> </div>
                <div className="tab " id="4"><i className="far fa-heart"></i></div>
                <div className="tab " id="5"><i className="fas fa-search"></i></div>
            </section>   */}
            
            <section className="mainTabs">
                <NavLink to="/"> <div className="tab activeTab"><i className="fas fa-home"></i> Hot</div></NavLink>
                <NavLink to="/"> <div className="tab"><i className="fas fa-chart-line"></i> Trending</div> </NavLink>
                <NavLink to="/"> <div className="tab"><i className="fas fa-random"></i> Random</div> </NavLink>
                <NavLink to="/">   <div className="tab"><i className="far fa-heart"></i> Favourites</div></NavLink>
            </section>

            {state.profileClicked?<Settings/>:null}
            {state.notificationClicked?<Notification/>:null}
            {state.chatClicked?<Chat/>:null}

        </div>
    )
}

export default Navigation

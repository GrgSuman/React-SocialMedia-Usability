import React, { useContext,useState } from 'react'
import {ClickContext,actionType} from '../../Global/GlobalState'
import {NavLink} from 'react-router-dom'
import './Settings.css'

const Settings=()=> {

  const[state,dispatch]=useContext(ClickContext)

  const[help,setHelp]=useState(false)
  
  const removeSlideCategory =()=>{
    return dispatch({type:actionType.CLICK_PROFILE,payload:!state.profileClicked})
}

  const changeSystemMode = ()=>{

    if(state.darkMode){
      localStorage.setItem("myMode","light")
      dispatch({type:actionType.SYSTEM_MODE,payload:!state.darkMode})
    }
    if(!state.darkMode){
      localStorage.setItem("myMode","dark")
      dispatch({type:actionType.SYSTEM_MODE,payload:!state.darkMode})
    }

  }

  const fontChange=(e)=>{
      localStorage.setItem("fontSize",e.target.value)
      dispatch({type:actionType.FONT_SIZE_CHANGE,payload:e.target.value})
      document.documentElement.style.setProperty("font-size", e.target.value+"%");
  }
  
    return (
        
        <div className="settings">

          <i className="fas fa-arrow-left backBtn"  onClick={removeSlideCategory}></i>

          <h3>Settings</h3>  

          <div className="users_settings dark_light">
           <NavLink to="/" className="darkk">Light Mode</NavLink>
          <label className="switch">
          <input type="checkbox" className="mode" onChange={changeSystemMode} defaultChecked={!state.darkMode}/>
          <span className="slider round"></span>
          </label>
          </div>

          <div className="users_settings">
           <p>User Settings</p>
           <NavLink to="/profile" onClick={removeSlideCategory}><i className="fas fa-user"></i> My Profile</NavLink>
          </div>


          <div className="users_settings">
           <p>Sytem Settings</p>
           <p className="hey_"> <span> <i className="fas fa-asterisk"></i> Change Font Size </span> </p>
           <input min="80" max="130" type="range" className="myRange"  value={state.fontSize} onChange={fontChange} />
           <NavLink to="/"><i className="fas fa-edit"></i> Privacy  </NavLink>
           <NavLink to="/" onClick={()=>setHelp(!help)}><i className="fas fa-users"></i> Help and documention</NavLink>
          </div>

          <button className="logout">Logout</button>

         {help? <div className="upload_form">

<section className="post_form">
<i className="fas fa-times" onClick={()=>setHelp(!help)}></i>
    <h4>Help and Documentation</h4>

    <div className="helpItems">


      <section><p><i class="far fa-user-circle"></i> Profile Settings</p></section>
      <section><p><i class="fas fa-user-secret"></i> Explore Privacy </p></section>
      <section><p><i class="fas fa-user-shield"></i> User Activity</p></section>
      <section><p><i class="fas fa-users"></i> Manage Groups</p></section>
      <section><p><i className="fas fa-user"></i> Account Prevelages</p></section>
      <section><p><i class="fas fa-blind"></i> Disablity Options</p></section>


    </div>
   
</section>

</div>:null}

        </div>
    )
}

export default Settings

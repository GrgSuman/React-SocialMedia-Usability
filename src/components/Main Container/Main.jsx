import React, {useContext } from 'react'
import {ClickContext,actionType} from '../../Global/GlobalState'
import Category from '../Category/Category'
import Center from '../Center Container/Center'
import Recommendation from '../Recommendation/Recommendation'
import './Main.css'


const smallDeviceStyle = {
    slideCategory:{
        left:"0%",
        "transition":".3s ease"
    },
    slideCategoryBlack:{
        filter:" brightness(0.5)",
        zIndex: "100",
        position: "fixed",
        overflow: "hidden"
    }
}

const Main=()=> {

    const[state,dispatch]=useContext(ClickContext)

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

    if(state.darkMode){
        document.documentElement.style.setProperty("--lightBackground", "#3a3a3a");
        document.documentElement.style.setProperty("--darkBackground", "#2b2b2b");
        document.documentElement.style.setProperty("--textColor", "#49c5b6");
        document.documentElement.style.setProperty("--buttonColor", "#3745ef");
        document.documentElement.style.setProperty("--darkFocusColor", "#49c5b68f");
        document.documentElement.style.setProperty("--darkBackColor", "#2b2b2bcc");

    }
    else{
        document.documentElement.style.setProperty("--lightBackground", "#fff");
        document.documentElement.style.setProperty("--darkBackground", "#f6eeeeab");
        document.documentElement.style.setProperty("--textColor", "#000");
        document.documentElement.style.setProperty("--buttonColor", "#3745ef");
        document.documentElement.style.setProperty("--darkFocusColor", "#49c5b68f");
        document.documentElement.style.setProperty("--darkBackColor", "#f8f8f8c9");

    }

    return (
        <div className="mainContainer">
            
        <section className="category" style={state.categoryClicked?smallDeviceStyle.slideCategory:null} onClick={removeTopLayerPopup}><Category/></section>
        
        <section className="center" style={state.categoryClicked?smallDeviceStyle.slideCategoryBlack:null} onClick={removeTopLayerPopup}>

             <Center/>

        </section>
        <section className="recommendation" onClick={removeTopLayerPopup} ><Recommendation/></section>
            
        </div>
    )
}

export default  Main



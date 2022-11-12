import React, { createContext, useReducer } from 'react'
import data from './data'


export const actionType={
     CLICK_MENU:'click-menu',
     CLICK_PROFILE:'click-profile',
     CLICK_NOTIFICATION:'click-notification',
     CLICK_CHAT:"click_chat",
     CLICK_UPLOAD:"click-upload",

     SYSTEM_MODE:'system-mode',
     FONT_SIZE_CHANGE:'font-size-change'



}

const initState={
   categoryClicked:false,
   profileClicked:false, 
   notificationClicked:false,
   chatClicked:false,
   uploadClicked:false,
   darkMode:localStorage.getItem("myMode")==="light"?false:true,
   fontSize:localStorage.getItem("fontSize")?localStorage.getItem("fontSize"):"100",
   posts:data
}


const reducer = (state,action)=>{
    switch(action.type){

        case actionType.CLICK_MENU:
                return{
                        ...state,categoryClicked:action.payload
                }
        case actionType.CLICK_PROFILE:
                return {
                        ...state,profileClicked:action.payload
                }
        case actionType.SYSTEM_MODE:
            return{
                ...state,darkMode:action.payload
            }
        case actionType.CLICK_NOTIFICATION:
            return{
                ...state,notificationClicked:action.payload
            }
        case actionType.CLICK_CHAT:
            return{
                ...state,chatClicked:action.payload
            }
        case actionType.FONT_SIZE_CHANGE:
            return{
                ...state,fontSize:action.payload
            }

        case actionType.CLICK_UPLOAD:
            return{
                ...state,uploadClicked:action.payload
            }

        default:
            return state

    }
}

export const ClickContext = createContext();

const ClickContextProvider=(props)=> {

    const[state,dispatch]=useReducer(reducer,initState);

    return (
        <ClickContext.Provider value={[state,dispatch]}>
            {props.children}
        </ClickContext.Provider>
    )
}

export {ClickContextProvider}

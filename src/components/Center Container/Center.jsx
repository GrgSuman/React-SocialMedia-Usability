import React, { useContext } from 'react'
import {NavLink} from 'react-router-dom'
import {ClickContext} from '../../Global/GlobalState'
import './Center.css'

const Center = () => {
    const[state]=useContext(ClickContext)

    return (
        <div className="mainPostList">

          {state.posts.users.map((value,i)=>{
              return <div key={value.id}>

                <section className="mainPost" >

                <div className="user_profile">
                  
                    <NavLink to="/profile">  <img src={value.userProfileImage} alt="user profile"/></NavLink>
                        <p className="user_name_time"><span className="name"><NavLink to="/profile"> {value.userName}</NavLink> </span> <span className="time" style={{"marginTop":"5px"}}><i className="far fa-clock"></i> {value.postTime}</span></p>
                    <i className="fas fa-ellipsis-h more"></i>
                </div>

                <p className="title">{value.postTitle}</p>

                {value.mainPostImage!==""?<img className="mainImage" src= {value.mainPostImage} alt="main post"/>:null}

                <div className="like_comment_share" style={{"marginTop":"15px"}}>

                    <section>

                    <p style={{"color":"rgba(0,0,0,0.8)"}}>
                        <span>{value.likes}</span>
                        <span><i className="far fa-thumbs-up"></i></span>
                        <span className="labelInfo">Likes</span>
                    </p>

                    </section>

                    <section>
                    <p style={{"color":"rgba(0,0,0,0.8)"}}>
                        <span>{value.comments}</span>
                        <span><i className="far fa-comment-alt"></i></span>  
                        {/* <i className="fas fa-thumbs-up"></i> */}
                        <span className="labelInfo">Comments</span>
                    </p>

                    </section>

                    <section>
                    <p style={{"color":"rgba(0,0,0,0.8)"}}>
                        <span>{value.shares}</span>
                        <span><i className="fas fa-share"></i></span>
                        <span className="labelInfo">Shares</span>
                    </p>

                    </section>

                </div>

                </section> 
        </div>
          })}


        </div>
    )
}

export default Center

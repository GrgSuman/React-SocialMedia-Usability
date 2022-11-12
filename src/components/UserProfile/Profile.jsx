import React, {useContext,useState } from 'react'
import {ClickContext} from '../../Global/GlobalState'
import Center from '../Center Container/Center'

import './Profile.css'

const Profile=()=> {
    const[state]=useContext(ClickContext)

    const[myTab,setMyTab]=useState({

        loading:false,
        followers:false

    })

    let x = Math.floor(Math.random() *3 );
    let user = state.posts.users[x]


    const loader=()=>{
        setMyTab((prev)=>{
            return {
                ...prev,
                loading:true
            }
        })
        setTimeout(()=>{
            setMyTab((prev)=>{
                return {
                    ...prev,
                    loading:false
                }
            })
        },1500)
    }

    const myPosts=()=>{
        document.documentElement.style.setProperty("--tabPosition", "-2.5%");
        loader();
        setMyTab((prev)=>{
            return {
                ...prev,
                followers:false
            }
        })
       
    }

    const myTimeLine=()=>{
        document.documentElement.style.setProperty("--tabPosition", "42%");
        loader();
        setMyTab((prev)=>{
            return {
                ...prev,
                followers:false
            }
        })


    }

    const myFollowers=()=>{
        document.documentElement.style.setProperty("--tabPosition", "87%");
        setMyTab((prev)=>{
            return {
                ...prev,
                followers:true
            }
        })
        loader();


    }


    return (
        <div className="profile">

            <div className="top_profile">

                <section className="user__">
                    <img src={user.userProfileImage} alt="real user"/>
                    <div>
                        <h2 className="sm_change">{user.userName}</h2>
                        <p className="sm__" style={{"margin":"5px 0"}}>@{user.userName}</p>
                        <p className="more__">More about me</p>

                    </div>
                </section>

            </div>


            <div className="user_profile_details">

                <section className="tab_menu">
                       <p onClick={myPosts}>My Posts</p>
                       <p onClick={myTimeLine}>Timeline</p>
                       <p onClick={myFollowers}>Followers</p>
                </section>


                <section className="post_of_user">

                    {
                    myTab.loading? 
                    <span className="loader">
                       <span className="loader2">
                       <span className="loader2">
                       <span className="loader2">
                       <span className="loader2">
                       </span>
                       </span>
                       </span>
                       </span>
                   </span>
                   : 

                   myTab.followers?

                   <div className="my_follow">
                       <h2>Total Followers</h2>
                    <h1>{user.followers}</h1>
                   </div>
                   :
                    <Center/>
                    }

                </section>

            </div>
            
        </div>
    )
}

export default Profile

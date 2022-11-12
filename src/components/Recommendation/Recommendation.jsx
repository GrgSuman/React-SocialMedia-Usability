import React from 'react'
import './Recommendation.css'
const Recommendation =()=> {
    return (
        <div className="rightMain">

            <section className="ads">
            <img src="ad.jfif" alt="ads"/>
            <i className="fas fa-times"></i>
            </section>


            <section className="joinCommunity">

                <p className="trending_groups">Trending Groups</p>

                <ul className="joinGroupList">
                    <li>
                        <div style={{"display":"flex"}}>
                        <img src="g1.jfif" alt="group profile"/>
                        <p>neptroll <span>121 members</span></p>
                        </div> 
                        <button>Join</button>
                    </li>

                    <li>
                        <div style={{"display":"flex"}}>
                        <img src="g2.jfif" alt="group profile"/>
                        <p>fun2fun <span>8991 members</span></p>
                        </div> 
                        <button>Join</button>
                    </li>

                    <li>
                        <div style={{"display":"flex"}}>
                        <img src="g3.jfif" alt="group profile"/>
                        <p>crazyguz <span>45111 members</span></p>
                        </div> 
                        <button>Join</button>
                    </li>
                </ul>

            </section>


            <section className="createCommunity">

            <p className="trending_groups">Make new community</p>
            <button>Create Group <i className="fas fa-plus" style={{"marginLeft":"5px"}}></i></button>
            </section>
            
        </div>
    )
}

export default Recommendation

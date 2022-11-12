import React, { useContext } from 'react'
import {ClickContext,actionType} from '../../Global/GlobalState'
import {NavLink} from 'react-router-dom'
import './Category.css'
import UploadMeme from "../UploadMeme/UploadMeme"


const Category = () => {

    const[state,dispatch]=useContext(ClickContext)

    const removeSlideCategory =()=>{
        return dispatch({type:actionType.CLICK_MENU,payload:!state.categoryClicked})
    }


    return (
        <div className="leftMain">
            
            {state.uploadClicked? <UploadMeme/>:null}
           
            <div style={{"display":"flex","justifyContent":"space-between","alignItems":"center"}}>
            <i className="fas fa-arrow-left" onClick={removeSlideCategory}></i>
            <NavLink to="/search" onClick={removeSlideCategory} className="searchInSm" title="search in sm"><i className="fas fa-search"></i></NavLink>
            </div>
          

            <button className="upload_content" onClick={()=>dispatch({type:actionType.CLICK_UPLOAD,payload:!state.uploadClicked})}> Upload Meme <i className="fas fa-plus" style={{"marginLeft":"5px"}}></i></button>
            
            <ul className="navContents">
               
            <li> <NavLink to="/"> <i className="fas fa-home"></i> Hot</NavLink></li>
            <li>   <NavLink to="/"> <i className="fas fa-chart-line"></i> Trending</NavLink></li>
            <li>  <NavLink to="/">  <i className="fas fa-random"></i> Random</NavLink></li>
            <li>  <NavLink to="/"> <i className="far fa-heart"></i> Favourites</NavLink></li>
            
            </ul>

            <p className="popular category_popular">Popular</p>

            <ul className="allCategories">
                <li><img src="c1.jpeg" alt="Anime"/> <span>Anime</span></li>
                <li><img src="c2.jpeg" alt="GIF"/> GIF</li>
                <li><img src="c4.jfif" alt="Savage"/> Savage</li>
                <li><img src="c5.jfif" alt="girl"/> Girl</li>
                <li><img src="c6.jfif" alt="college memes"/> College</li>
                <li><img src="c7.jfif" alt="Gaming memes"/> Gaming</li>
                <li><img src="c8.jfif" alt="funny memes"/> Funny</li>
            </ul>



        </div>
    )
}

export default Category

import React from 'react'
import {NavLink} from 'react-router-dom'
import "./SearchSmall.css"

const SearchSmall = ()=> {
    return (
        <div>
            <NavLink to="/" className="srhBack">Back</NavLink>

             <section className="search_for_sm">
                  <input type="text" placeholder="Search trending memes.." autoFocus />
                  <i className="fas fa-search "></i>
            </section>
        </div>
    )
}

export default SearchSmall

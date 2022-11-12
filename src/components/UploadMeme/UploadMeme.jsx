import React, { useContext,useState } from 'react'
import './UploadMeme.css'
import {ClickContext,actionType} from '../../Global/GlobalState'


const UploadMeme = ()=> {

    const[state,dispatch]=useContext(ClickContext)

    const[title,setTitle]=useState("")
    const[tags,setTags]=useState("")
    const[error,setError]=useState("")

    const inputRef = React.useRef(null)


    const changeTitle=(e)=>{
     setTitle(e.target.value)
    }
    const changeTags=(e)=>{
     setTags(e.target.value)
    }
    const handleSubmit=(e)=>{
     e.preventDefault()
     if(title===""&&tags===""){
         setError("Title and Tags are required!")
     }else if(title===""){
        setError("Title is required!")
     }else if(tags===""){
        setError("Tag is required!")
     }else{
         setError("")
         setTags("")
         setTitle("")
     }
        
    }
    
    const removeUpload =()=>{
        return dispatch({type:actionType.CLICK_UPLOAD,payload:!state.uploadClicked})
    }

    return (
        <div className="upload_form">

            <section className="post_form">
            <i className="fas fa-times" onClick={removeUpload}></i>
            <h4>Upload funny Meme!</h4>
                <form action="" onSubmit={handleSubmit}>
                    
                    <div className="design" onClick={()=>inputRef.current.click()}>
                    <lottie-player src="https://assets9.lottiefiles.com/packages/lf20_0pqnkgoi.json"  background="transparent"  speed="1"  style={{"height":"150px","width":"150px"}} loop  autoplay></lottie-player>
                    <p>Select an image or drag and drop</p>
                    </div>
                    <p style={{"margin":"5px 0","color":"red","fontSize":"14px"}}>{error}</p>
                    <input type="file" className="fileInpput" ref={inputRef}/>
                    <input type="text" value={title} onChange={changeTitle} placeholder="Title of post"/>
                    <input type="text" placeholder="Tags" value={tags}  onChange={changeTags}/>
                    <button>Upload Meme  <i className="fas fa-plus" style={{"marginLeft":"5px","color":"white"}}></i></button>

                </form>
            </section>
            
        </div>
    )
}

export default UploadMeme

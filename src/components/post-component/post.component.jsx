import React, { useState } from 'react'
import { useHistory } from 'react-router'
import { formatRelative } from 'date-fns'
import './post.styles.scss'


const Post = ({post, id, sys})=> {
    // post = post.fields
    const history= useHistory()

    const handleOnClick = (id)=>{
        history.push(`/article/${id}`)
  
    }

    const relativeDate =(date)=>{
        const newDate =formatRelative(new Date(date), new Date())
        console.log(newDate)
        return newDate


    }

    
    return(
        <div className='post-con' >

            <div className='title-con' onClick={()=>handleOnClick(id)}>{post?.title}</div>
            {<div className='timestamp'>{!sys?.updatedAt? (relativeDate(sys.createdAt)):(relativeDate(sys.updatedAt))}</div> /* checks if there is no updated at timestamp, if there isn't one it uses the created at timestamp. */}
            {post?.description && <div className='large-textbox'>{post.description}</div>/* checks for a description and displays it if there is. */} 
        </div>
    )
}


export default Post
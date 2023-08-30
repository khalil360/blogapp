import React from 'react'

function BlogList({blog,HandleDelete}) {
  
  return (
    <div className='blog-list'>
        <div className='home-blogs'>
        <h2>{blog.title}</h2>
        <p>written by {blog.author}</p>
        <small>{blog.body}</small>
        <button onClick={()=>HandleDelete(blog.id)} >delete b</button>
        </div>
    </div>
  )
}

export default BlogList

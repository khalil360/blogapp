import React, { useState } from 'react'

function Create() {

    const [title,setTitle] = useState("")
  return (
    <form>
        <h2>Add new Blog</h2>
        <label>Blog title : </label>
        <input type="text" onChange={(e)=>setTitle(e.target.value)} />
        <h1>{title}</h1>
    </form>
  )
}

export default Create
import React from 'react'

function About() {
    const blogNumbers = "20"
  return (
    <div>
{
    blogNumbers === "100" ? (<div><h1>Welcome to our website</h1><p>we reach 100 blogs</p></div>):
    blogNumbers === "0" ? (<div><h1>hello</h1><p>we still en progress</p></div>):
    (<div><h1>Welcome to our website</h1><p>reach more blogs here</p></div>)
}      
    </div>
  )
}

export default About

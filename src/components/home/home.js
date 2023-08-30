import React, { useEffect, useState } from 'react'
import BlogList from '../blogList/blogList'

function Home() {
    const [blogs, setBlogs] = useState([
        { title: 'My new website', body: 'lorem ipsum...', author: 'Hamdi', id: 1 },
        { title: 'Welcome party!', body: 'lorem ipsum...', author: 'Hassen', id: 2 },
        { title: 'Web dev top tips', body: 'lorem ipsum...', author: 'Olfa', id: 3 }
      ])
    const HandleDelete = (id) => {
      const newblog = blogs.filter(el => el.id !== id);
      setBlogs(newblog)
    }
    // useEffect(()=>{},[])
  return (
    <div className='home'>
      {blogs.length > 0 ? blogs.map(el=>(
        <BlogList blog={el} HandleDelete={HandleDelete}/>
      ))
    :<h4 style={{textAlign:'center'}}>No Blogs Yet</h4> }
    </div>
  )
}

export default Home

import React, { useState } from 'react';
import { Link } from 'react-router-dom';

const Blog = () => {
    const [blogs,setBlogs] = useState([
        {
            id:1,
            title:'Pizza of the year!!',
            desc:'this our best pizza we ever sell, in this year it become the best pizza in Somalia'
        },
        {
            id:2,
            title:'Have you ever Test "Canjeelo Somali ?',
            desc:'This is one our tradition in Somalia even in abroard,we use this food every morning as a breakfast.'
        },
        {
            id:3,
            title:'The famous food in Somalia.',
            desc:'Every country has a famous food,In Somalia that is a rice with meat and banana.'
        },
        {
            id:4,
            title:'Coffee "Mind blowing" ',
            desc:'Coffe will make an active person'
        },
        {
            id:5,
            title:'This is "Canbuulo"!',
            desc:'Beans added by a wheat is one of the Somali people like.'
        },
        {
            id:6,
            title:'what is "Shaah" ?',
            desc:'Somalia people uses tea like water, if you go to the steets youy will see thousands of people drinking tea.'
        }
    ])
    return (
        <div className='mt-10'>
           <h2 className='text-center text-2xl font-bold'>My Blogs</h2>
           <div className='flex flex-wrap'>
           {blogs.map(blog =>(
            <div className='w-30 h-20 ml-6 mt-4 border-spacing-5 rounded shadow' key={blog.id}>
                <h3 className='p-4 text-2xl cursor-pointer'>{blog.title}</h3>
                {/* <p>{blog.desc}</p> */}
            </div>
           ))}
           </div>
          
        </div>
    );
}

export default Blog;

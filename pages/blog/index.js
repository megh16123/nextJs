import Link from 'next/link';
import React from 'react';
import data from "./blog.json";
import bstyles from '../../styles/blog.module.scss'
import Navbar from '../../components/Navbar';
function Menu() {
  return (<>
  <Navbar title="Blogs"/>
  <div className={bstyles.links}>
      {data.map((blog)=>{return(<Link key={blog.title} href={`blog/${blog.title}`}>{blog.title}</Link>)})}
  </div>
  </>);
}

export default Menu;

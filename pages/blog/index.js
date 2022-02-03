import Link from 'next/link';
import React from 'react';
import data from "./blog.json";
import bstyles from '../../styles/blog.module.scss'
function Menu() {
  return (<div className={bstyles.links}>
      {data.map((blog)=>{return(<Link href={`blog/${blog.title}`}>{blog.title}</Link>)})}
  </div>);
}

export default Menu;

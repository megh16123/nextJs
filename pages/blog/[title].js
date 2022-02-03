import {React,useState} from 'react';
import blogs from './blog.json';
import Navbar from '../../components/Navbar';

export const getStaticPaths = ()=>{
    const paths = blogs.map((curElem)=>{
        return {
            params:{
                title:curElem.title,               
            }
        }
    })
    return{
        paths,
        fallback:false
    }
}

export const getStaticProps = (context)=>{
const {title} = context.params;
const data = blogs.filter(elem=>elem.title==title)
    return {
    props:{
        data
    }
}
}
function title({data}) {
 return (<>
<Navbar title={data[0].title}/>
    <h1>{data[0].title}</h1>
    <h2>{data[0].heading}</h2>
    <p>{data[0].subheading}</p>
    </>);
}

export default title;

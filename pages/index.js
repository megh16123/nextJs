import Head from 'next/head'
import Image from 'next/image'
import styles from '../styles/Home.module.scss'
import axios from 'axios'
import { useState } from 'react'
import Link from 'next/link'
const Navbar=()=>{
  return (<>
  <Head>
    <title>Main</title>
  </Head>
  <navbar className={styles.navbar}>
   
          <Link  href="/Home">Home</Link>
          <Link  href="/about">About</Link>
          <Link  href="/blog">Blogs</Link>
    
  </navbar>
  </>);
}
export default function Home() {
  const [dat,setDat] = useState({name:"",email:"",age:0});
  const [reqD,setDet] = useState();
  const getter = ()=>{
    axios.get('./api/hello',{params:{namer:reqD.toLowerCase()}}).then((resp)=>{
      setDat(...resp.data)
      setDet("");
    });

  }
  const handleInput = (event)=>{
    setDet(event.target.value);
  }
  return (
   <>
   <Navbar/>
   <div className={styles.grouper}>

   <input type="text" value={reqD} onInput={handleInput}/>
   <button onClick={getter} >Get The Data</button>    
   </div>
   <div className={styles.flexer}>
   <h1 className={styles.code}>{dat.name}</h1>
   <h1 className={styles.code}>{dat.email}</h1>
   <h1 className={styles.code}>{dat.age}</h1>
   </div>
   </>
  )
}

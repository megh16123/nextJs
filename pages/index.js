import styles from '../styles/Home.module.scss';
import axios from 'axios';
import { useState } from 'react';
import Navbar from '../components/Navbar';

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
   <Navbar title="Main"/>
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

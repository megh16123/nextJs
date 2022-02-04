import estyle from '../styles/error.module.scss';
import { useEffect } from 'react';
import {useRouter} from 'next/router';
import Navbar from '../components/Navbar';
const Error = () => {
    const router = useRouter();
    const handleRedirect = ()=>{
        router.push("/");
    }
    useEffect(()=>{
        setTimeout(handleRedirect,3000)
       
    });
  return <>
  <Navbar title="Error"/>
  <div className={estyle.mainDiv}>
<h1>404|| Not Found</h1>
<button id={estyle.button} onClick={handleRedirect}>Go To Home Page</button>
  </div>
  </>;
};

export default Error;

import estyle from '../styles/error.module.scss';
import Head from 'next/head'
import { useEffect } from 'react';
import {useRouter} from 'next/router';
const Error = () => {
    const router = useRouter();
    const handleRedirect = ()=>{
        router.push("/");
    }
    useEffect(()=>{
        setTimeout(handleRedirect,5000)
       
    },[]);
  return <>
  <Head>
      <title>Error</title>
  </Head>
  <div className={estyle.mainDiv}>
<h1>404| Not Found</h1>
<button id={estyle.button} onClick={handleRedirect}>Go To Home Page</button>
  </div>
  </>;
};

export default Error;

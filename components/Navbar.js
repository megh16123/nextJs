import Link from 'next/link'
import Head from 'next/head';
import styles from '../styles/Home.module.scss'
const Navbar=(props)=>{
    return (<>
    <Head>
      <title>{props.title}</title>
    </Head>
    <navbar className={styles.navbar}>
            <Link href="/">Main</Link>
            <Link  href="/Home">Home</Link>
            <Link  href="/about">About</Link>
            <Link  href="/blog">Blogs</Link>
      
    </navbar>
    </>);
  }

export default Navbar;
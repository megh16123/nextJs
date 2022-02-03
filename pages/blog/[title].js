import {React,useState} from 'react';
import {useRouter} from 'next/router';

import blogs from './blog.json';

function title() {
const router = useRouter();
const {title} = router.query;


    return (<>

    <h1>{title}</h1>
    <h2>{}</h2>
    <p>{}</p>
    </>);
}

export default title;

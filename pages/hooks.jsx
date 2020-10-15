import React, { useState, useEffect } from 'react';
import request from 'umi-request';
import { server } from '../config';
import Layout, { siteTitle } from '../components/layout'

const Hooks = ({stars}) =>{
    const [list,setList] = useState([])
    

    useEffect(() => {
       
    }, []);

    return(
        <div>
            <ul>
                {
                   stars.map((item,i)=>(
                        <li key={i}>
                            <img src={item.cover} alt=""/>
                            <h4>{item.title}</h4>
                        </li>
                    ))
                }
            </ul>
            hooks
        </div>
    )
}

Hooks.getInitialProps = async ({ req ,pathname}) => {
    // const res = await fetch('https://api.github.com/repos/zeit/next.js')
    let res2;
    const res = await  request.get(`${server}/api/movi`)
    .then(function (response) {
        res2 =response
    })
    .catch(function (error) {
      console.log(error);
    });

    // const json = await res.json()
    return { stars: res2.subjects }
  }

export default Hooks
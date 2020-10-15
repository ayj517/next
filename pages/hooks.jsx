import React, { useState, useEffect } from 'react';
import request from 'umi-request';
import { server } from '../config';
import Layout, { siteTitle } from '../components/layout'

const Hooks = ({stars}) =>{
    const [list,setList] = useState([])
    
    console.log(stars)
    useEffect(() => {
    //     request.get(`${server}/apis/j/search_subjects?type=movie&tag=热门&page_limit=50&page_start=0`)
    // .then(function (response) {
    //     console.log(response)
    // })
    // .catch(function (error) {
    //   console.log(error);
    // });
    }, []);

    return(
        <div>
            <ul>
                {
                  stars && stars.map((item,i)=>(
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
    const res = await  request.get(`${server}/apis/j/search_subjects?type=movie&tag=%E7%83%AD%E9%97%A8&page_limit=50&page_start=0`)
    .then(function (response) {
        res2 =response
    })
    .catch(function (error) {
    //   console.log(error);
    });
    // console.log(res2)
    // const json = await res.json()
    return { stars: res2.subjects }
  }

export default Hooks
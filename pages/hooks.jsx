import React, { useState, useEffect } from 'react';
import request from 'umi-request';
import { server } from '../config';
import '../styles/movi.scss'
import Layout, { siteTitle } from '../components/layout'

const Hooks = ({stars}) =>{
    const [list,setList] = useState([])
    

    useEffect(() => {
       
    }, []);

    return(
        <div>
            <img className="m-banner" src="/images/ccc.png" alt=""/>
            <ul className="movilist">
                {
                   stars.map((item,i)=>(
                        <li key={i}>
                            <div className="img-box">
                            <img src={'https://ae01.alicdn.com/kf/U6ef9b0e030e9473c861b5466253474b1l.jpg'} alt=""/>
                            </div>
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

//   Hooks.getInitialProps = async ({ req ,pathname}) => {
//     // const res = await fetch('https://api.github.com/repos/zeit/next.js')
//     let res2;
//     const res = await  request.get(`${server}/apis/j/search_subjects?type=movie&tag=%E7%83%AD%E9%97%A8&page_limit=50&page_start=0`)
//     .then(function (response) {
//         res2 =response
//     })
//     .catch(function (error) {
//     //   console.log(error);
//     });
//     // console.log(res2)
//     // const json = await res.json()
//     return { stars: res2.subjects }
//   }

export default Hooks
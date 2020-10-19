import React, { useState, useEffect } from 'react';
import request from 'umi-request';
import { server } from '../config';
import '../styles/movi.scss'
import Layout, { siteTitle } from '../components/layout'


const Hooks = ({stars,resm}) =>{
    const [list,setList] = useState([])
    

    useEffect(() => {
    console.log(resm)
    }, []);

    return(
        <div>
            <img className="m-banner" src="/images/ccc.png" alt=""/>
            <ul className="movilist">
            {
                resm.users.map((item,i)=>(
                    <li key={i}>
                        <div className="img-box">
                        <img src={item.poster} alt=""/>
                        </div>
                        <p>时间：「{item.lastupdated}」</p>
                        <h4>{item.title}</h4>
                    </li>
                ))
            }
            </ul>
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
    let res3
    const res = await  request.get(`${server}/api/movi`)
    .then(function (response) {
        console.log(1112221)
        res2 =response
        console.log(res2)
    })
    .catch(function (error) {
      console.log(error);
    });
    console.log(33)

    const resm = await  request.get(`${server}/api/movi2`)
    .then(function (response) {
        console.log(1112221)
        res3 =response
        console.log(res2)
    })
    .catch(function (error) {
      console.log(error);
    });
    // const json = await res.json()
    return { stars: res2.subjects,resm:res3 }
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
//     return { stars: res2.subjects, }
//   }

export default Hooks
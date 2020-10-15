import React, { useState, useEffect } from 'react';
import request from 'umi-request';
import Layout, { siteTitle } from '../components/layout'

const Hooks = () =>{
    const [list,setList] = useState([])

    useEffect(() => {
        request.get('/api/movi')
        .then(function (response) {
          console.log(response);
            setList(response)
        })
        .catch(function (error) {
          console.log(error);
        });
    }, []);

    return(
        <div>
            <ul>
                {
                   list &&  list.subjects && list.subjects.map((item)=>(
                        <li>
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

export default Hooks
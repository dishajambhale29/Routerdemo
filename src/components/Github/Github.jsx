import React, { useEffect, useState } from 'react'
import { useLoaderData } from 'react-router-dom'

const Github = () => {
     const  data=useLoaderData()
    // const[data,setData]=useState([])
    // useEffect(()=>{
    //     fetch('https://api.github.com/users/dishajambhale29')
    //     .then(res=>res.json())
    //     .then(data=>{
    //         console.log(data);
    //         setData(data)
    //     })

    // },[])
  return (
    <div className='text-center m-4 bg-white-600 text-black p-4 text-3xl'>Github followers {data.followers}
    <img className='text-center' src={data.avatar_url} alt="Git picture" width={300} />
    </div>

  )
}

export default Github

export const githubInfoLoder=async()=>{
    const response=await fetch('https://api.github.com/users/dishajambhale29')
    return response.json()
}
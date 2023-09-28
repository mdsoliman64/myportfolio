import React,{useState,useEffect} from 'react'
import "./Portfolio.css"

import Post from '../Assets/service-post/Post';

function Portfolio() {
  const [mbdevice,setMbDevice]=useState(false);
  const windowSize = window.innerWidth;
  useEffect(()=>{
  if(windowSize <700){
setMbDevice(true)
  }else{
setMbDevice(false);
  }
  },[windowSize]);

  
  return (
   <section id="Portfolio">
      <div className='Portfolio-wrap'>
      <div className={mbdevice ?"Portfolio-title-mb":"Portfolio-title"}>
         <h1>Portfolio</h1>
        </div>
        <div className={mbdevice ?'Portfolio-item-mb':"Portfolio-item"}>
            <ul>
                {Post.map((item,index)=>{
                   return(
                    <a href={item.path} key={index}> <li> {item.title}</li></a>
                   )
                })}
            </ul>
        </div>
      </div>
   </section>
  )
}

export default Portfolio
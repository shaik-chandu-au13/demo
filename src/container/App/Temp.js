import React, { useState } from 'react'
import {useEffect} from 'react'


export default function Apihook () {
    const [click, setClick] = useState(false);
    const [datas,setDatas] = useState([])
    const [posts,setPosts] = useState([])
    const [titles,setTitles] = useState([])
    // state = {datas:[],
    //     titles: [],
        
    //   }
      useEffect(() => 
      
       {
        fetch('https://jsonplaceholder.typicode.com/users')
        .then(res => res.json())
        .then((data) => {
            setTitles(data)
          console.log(titles)
        })
        .catch(console.log)
      });
      
      

        return (
            <>
            
            
           <div className="container" style={{display: 'flex',width:"50%"}}>
            <div className="col-xs-12">
            
            <ul>
            {titles.map((title) => (
              <li key={title.id}>
                  <button className="btn btn-primary waves-effect" name={title.id} onClick={(e)=>{
          let id = e.target.name
          
        fetch('https://jsonplaceholder.typicode.com/users/'+id)
        .then(res => res.json())
        .then((data) => {
            setClick(true)
            setDatas(data)
            
            console.log(datas)
          })

          fetch('https://jsonplaceholder.typicode.com/posts/'+id)
        .then(res => res.json())
        .then((data) => {
            setClick(true)
            setPosts(data)
            
            console.log(posts)
          })
          
      }}> User {title.id} </button>                 
                </li>
            ))}</ul>
            </div >
            
              {click?<div class="row">
    <div className="col s12 m6" style={{width:"100%"}} >
      <div className="card blue-grey darken-1">
        <div className="card-content white-text">
          <span className="card-title blue-text">{datas.title}</span>
          <p>{datas.name}</p>
          <p>{datas.phone}</p>
          <p>{datas.website}</p>
        </div>
        <div className="card-action">
        <span className="card-title blue-text">{posts.title}</span>
          <p>{posts.body}</p>
          </div>
      </div>
    </div>
  </div>:<div className="col s12 m6" style={{width:"50%"}}><h3>click on the User<br/> to display the content</h3></div>}
              
              </div></>
            )
           }    

 


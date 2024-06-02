import React, { useEffect, useState } from 'react'
import axios from 'axios'
import bgGif from '../gif/giphy.gif'

const Card=({title,imageUrl,url})=>(
  <div className="card">
     <a href={url} target="_blank" rel="noopener noreferrer">
    <img src={imageUrl} alt="preview" />
    <h5 className="card-title">{title}</h5>
    </a>
  </div>
)
const Row=({title,arr=[]})=>(
  <div className="row">
    <h3>{title}</h3>
    <div className='rowdata'>
    {
     arr.map((item,index)=> 
    <Card 
    key={index} 
    title={item.title}
    imageUrl={item.urlToImage}
    url={item.url}
    />)
     }
    </div>
  </div>
)

const Home = () => {
  const divStyle = {
    backgroundImage: `url(${bgGif})`,
    backgroundSize: 'cover',
    backgroundRepeat: 'no-repeat',
    backgroundAttachment: 'fixed',
  };

  const [upcoming,setUpcoming]=useState([])
  useEffect(() => {
  const fetchUpcomning=async()=>{
    try{
  const response=await axios.get("https://newsapi.org/v2/top-headlines?q=football&apiKey=7f1f8844c098447a864a119e07a27b25")
  console.log(response.data)
  setUpcoming(response.data.articles)
  }catch(error){
    console.error('error',error)}}
  fetchUpcomning()
}, [])

return (
  <>
    <div className='header' style={divStyle}>
    </div>
    <div className="main">
      <h1>THIS_IS_FOOTBALL⚽</h1>
      </div>
     <div className='inside'>
       <h2>Watch Out All Football Related News And Stories Here And Many More Interesting Articles</h2>
        <Row arr={upcoming}/>
      </div> 
  </>
  )
}
export default Home

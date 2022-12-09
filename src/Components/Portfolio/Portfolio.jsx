
import Star from '../Star/Star'
import styles from './Portfolio.module.css'
import Card from '../Card/Card'
import img1 from '../../images/cabin.png'
import img2 from '../../images/cake.png'
import img3 from '../../images/circus.png'
import img4 from '../../images/game.png'
import img5 from '../../images/safe.png'
import img6 from '../../images/submarine.png'
import { useState } from 'react'



export default function Portfolio() {
  const[model,setmodel]=useState(false);
  const [tempData,settempData]=useState([]);


  const testimg=(index ,img,title)=>{
    let tempData=[index ,img,title];
    settempData(item =>[1,...tempData ])
    return setmodel(true);

  }
  
  let card1=[
    {
    title:'LOG CABIN',
    img:img1,
   
  },
  {
    title:'TASTY CAKE',
    img:img2,
   
  },
  {
    title:'CIRCUS TENT',
    img:img3,
   
  },{
    title:'CONTROLLER',
    img:img4,
   
  },
  {
    title:'LOCKED SAFE',
    img:img5,
   
  },
  {
    title:'SUBMARINE',
    img:img6,
   
  }
]
  return (
    <>
      <section className='py-5'>
        <div className="container text-center pt-5">
          <h2 className={`${styles.portfolioh2} pb-3`}>PORTFOLIO</h2>
          <Star color='#2c3e50' bg='#2c3e50'/>
          <div className="row g-5">
            {card1.map((port,index)=>
            <>
             <Card  
            title={tempData[3]}
            img={tempData[2]}
            
             />
            <div className="col-lg-4" key={index} >
                  <div className="portfolio-item position-relative" onClick={()=> (testimg(index,port.img,port.title))} >
                  <img src={port.img} className='w-100 rounded' alt="" />
                  <div className={`${styles.layer} position-absolute  w-100 h-100 top-0  d-flex justify-content-center align-items-center rounded`} data-bs-toggle="modal" data-bs-target="#exampleModal" >
                    <i className="fa-solid fa-plus  fw-bolder fa-4x text-white"></i>
                  </div>
                </div>
                </div>
               
            </> 
            
            )}
           
          </div>
        </div>
      </section>
    
    </>
  )
}

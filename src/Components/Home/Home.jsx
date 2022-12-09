import React from 'react'
import homeImg from '../../images/avataaars (1).svg'
import Star from '../Star/Star'
import styles from './Home.module.css'

export default function Home() {
  return (
    <>
   <header className={`${styles.homebg}` }>
    <div className="container text-center pb-5">
        <img src={homeImg} className={`${styles.homeImg} mt-5`} alt="" />
        <h1 className={`text-uppercase mb-4 text-white fw-bold ${styles.homeh1} pb-3`}>Start React</h1>
        <Star color='white' bg='white'/>
        <p className='pb-5 fs-4 text-white'>Graphic Artist - Web Designer - Illustrator</p>
        

    </div>
   </header>


    </>
  )
}

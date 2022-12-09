import React from 'react'
import styles from './Star.module.css'

export default function Star(props) {
  const { color ,bg}=props
  return (
    <>
     <div className='d-flex justify-content-center align-items-center pb-3'>
        <div className={`${styles.lineBefore}`} style={{backgroundColor:`${bg}`}}></div>
        <i className={`${styles.icon} fa-solid fa-star fs-1 px-3`} style={{color:`${color}`}}></i>
        <div className={`${styles.lineBefore}`}  style={{backgroundColor:`${bg}`}}></div></div>
    
    </>
  )
}

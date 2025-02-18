import React, { useState } from 'react'
import Star from '../Star/Star'
import styles from './Contact.module.css'

export default function Contact() {
  const [name ,setName]=useState("")
  const [nameError,setNameError]=useState(false)
  const [email ,setEmail]=useState("")
  const [emailerror,setEmailerror]=useState(false)
  const [phone ,setPhone]=useState("")
  const [phoneError,setPhoneError]=useState(false)
  function registHandel(e){
    e.preventDefault()
    if(name.length<3|| phone.length===11||email.length<8){
    alert('Success')
    }else{
      alert('invalid')
    }
  }
  function nameHandler(e) {
    let item=e.target.value
    if(item.length<4){
       setNameError(true)
      
    }else{
      setNameError(false)
     
    }
    setName(item)
  }
  function phoneHandler(e) {
    let item=e.target.value
    if(item.length<11){
      setPhoneError(true)
      
    }else{
      setPhoneError(false)
     
    }
    setPhone(item)
  }

  function emailHandler(e) {
    let item=e.target.value
    if(item.length<4){
      setEmailerror(true)
    }else{
      setEmailerror(false)
    }
    setEmail(item)
  }
  return (
    <>
    <section className='pt-5 mt-5'>
      <div className="container text-center pt-5">
        <h2 className={`${styles.contacth2} pt-5 text-uppercase fs-1 fw-bold`}>CONTACT ME</h2>
        <Star color='#2c3e50' bg='#2c3e50'/>
        {/* form */}
       
       <form className='pb-5' onSubmit={registHandel}>
        <div className="control-group border-bottom p-3">
          <input type="text"  className='form-control border-0  fs-3' placeholder='Name' onChange={nameHandler}/>
            {nameError? <span className='text-danger'>Please enter your name.</span>:""}
        </div>
        <div className="control-group border-bottom p-3">
          <input type="email"  className='form-control border-0 fs-3' placeholder='Email Address' onChange={emailHandler} />
          {emailerror? <span className='text-danger'>Please enter your email address.</span>:""}
        </div>
        <div className="control-group border-bottom p-3">
          <input type="number"  className='form-control border-0 fs-3' placeholder='Phone Number' onChange={phoneHandler} />
          {phoneError? <span className='text-danger'>Please enter your phone number. </span>:""}
        </div>
        <div className="control-group border-bottom p-3">
          <textarea type="number"  className='form-control border-0 fs-3' rows={5} placeholder='message' />
        </div>
        <button className='btn py-3 px-4 text-white mt-3 d-flex ' style={{backgroundColor: "#1abc9c"}}>Send</button>
       
       </form>


      </div>
    </section>
    
    </>
  )
}

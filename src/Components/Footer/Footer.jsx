import React from 'react'
import styles from './Footer.module.css'

export default function Footer() {
  return (
    <>
    <footer>
      <div style={{backgroundColor:'#2c3e50'}} className="text-white p-5">
        <div className="container">
          <div className="row g-4">
            <div className="col-lg-4 text-center">
            <h4 className="text-uppercase mb-4">Location</h4>
            <p className="lead mb-0"> 2215 John Daniel Drive  </p>
            <p className="lead mb-0"> Clark, MO 65243 </p>     
            </div>
            {/* icons */}
            <div className="col-lg-4 text-center">
            <h4 className="text-uppercase mb-4">Around the Web</h4>
            <div className='d-flex justify-content-center py-3'>
            <div className={`${styles.icon} mx-1`}><i className="fa-brands fa-facebook-f"></i></div>
            <div className={`${styles.icon} mx-1`}><i className="fa-brands fa-twitter"></i></div>
            <div className={`${styles.icon} mx-1`}><i className="fa-brands fa-linkedin-in"></i></div>
            <div className={`${styles.icon} mx-1`}><i className="fa-brands fa-dribbble"></i></div>
            </div>
            </div>
            <div className="col-lg-4 text-center">
            <h4 className="text-uppercase mb-4">About Freelancer</h4>
            <p className="lead mb-0 p-3"> Freelance is a free to use, MIT licensed Bootstrap theme created by Route</p>
            </div>
          </div>
        </div>
      </div>

      {/* copy right */}
    <div className="copyRight"  style={{backgroundColor:'#1a252f'}}>
        <div className="container text-center p-3 text-white">
        <small>Copyright © Your Website 2021</small>
        </div>
    </div>
    </footer>
    
    
    
    
    </>
  )
}

import React from 'react'
import Star from '../Star/Star'
import styles from './About.module.css'

export default function About() {
  return (
    <>
    <section className={`${styles.sectionBg} py-5`}>
      <div className="container text-center  px-4 py-5">
      <h2 className={`text-center text-uppercase fs-1 fw-bold text-white pt-5 pb-3`}>About</h2>
      <Star color='white' bg='white'/>
      <div className="row g-4">
        <div className="col-lg-6 px-5">
        <p className="lead text-white">Freelancer is a free bootstrap theme created by Route. The download includes the complete source files including HTML, CSS, and JavaScript as well as optional SASS stylesheets for easy customization.</p>
        </div>
        <div className="col-lg-6 px-5 ">
        <p className="lead text-white">Freelancer is a free bootstrap theme created by Route. The download includes the complete source files including HTML, CSS, and JavaScript as well as optional SASS stylesheets for easy customization.</p>
        </div>
      </div>
      </div>
    </section>
    
    
    
    </>
  )
}

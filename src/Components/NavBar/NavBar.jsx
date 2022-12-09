import React from 'react'
import styles from './Nav.module.css'
import{Link, NavLink} from 'react-router-dom'

export default function NavBar() {
  return (
    <><nav className={`navbar navbar-expand-lg fixed-top ${styles.test} p-4`}>
    <div className="container px-5">
      <Link className="navbar-brand fs-2 fw-bold text-white" to="">Start React</Link>
      <button className="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarNav" aria-controls="navbarNav" aria-expanded="false" aria-label="Toggle navigation">
        <span className="navbar-toggler-icon"></span>
      </button>
      <div className="collapse navbar-collapse" id="navbarNav">
        <ul className="navbar-nav ms-auto">
        <li className="nav-item px-3 fs-5 fw-bold">
            <NavLink className={`nav-link ${styles.NavColor}`}  to="">Home</NavLink>
          </li>
          <li className="nav-item px-3 fs-5 fw-bold">
            <NavLink className={`nav-link ${styles.NavColor}`}  to="portfolio">Portfolio</NavLink>
          </li>
          <li className="nav-item px-3 fs-5 fw-bold">
            <NavLink className={`nav-link ${styles.NavColor}`}  to="about">About</NavLink>
          </li>
          <li className="nav-item px-3 fs-5 fw-bold">
            <NavLink className={`nav-link ${styles.NavColor}`} to="contact">Contact</NavLink>
          </li>
          
        </ul>
      </div>
    </div>
  </nav></>
  )
}

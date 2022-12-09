
import React, { Component } from 'react'
import Star from '../Star/Star'

export default class Card extends Component {

  render() {
    return (
      <>
      <div className="modal fade  py-5 position-absolute" id="exampleModal" tabIndex="-1" aria-labelledby="exampleModalLabel" aria-hidden="true">
  <div className="modal-dialog modal-xl ">
    <div className="modal-content ">
      <div className=" text-center  position-relative">
        <h1 className="modal-title fs-2 pt-3" id="exampleModalLabel" style={{color:'#2c3e50'}}>{this.props.title}</h1>
        <button type="button" className="btn-close position-absolute top-0 end-0 p-3 fs-3" data-bs-dismiss="modal" aria-label="Close"></button>
      </div>
      <Star color='#2c3e50' bg='#2c3e50'/>
      <div className="modal-body w-75 mx-auto">
      <img src={this.props.img} alt="" className='w-100 rounded'/>
        <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Debitis officiis porro magnam ratione tempora voluptatibus consectetur ad sit, natus quibusdam?</p>
      </div>
      <div className="modal-footer d-flex mx-auto" >
        <button type="button" className="btn btn-secondary border-0" style={{backgroundColor:'#1abc9c'}} data-bs-dismiss="modal">Close Window</button>
      </div>
    </div>
  </div>
  
</div>
      </>
    )
  }
}

import React from 'react'
import img from '../assets/air.png'
import Image from 'next/image';

export default function card(props) {

  return (
    <div className="card card-compact w-96 bg-base-100 shadow-xl ">
  <figure >
    <Image src={props.image} alt="Shoes" width={100} height={100} /></figure>
  <div className="card-body">
    <h2 className="card-title ">{props.name} <p className='text-2xl'>{props.value}</p> </h2>
    
   
  </div>
</div>
  )
}

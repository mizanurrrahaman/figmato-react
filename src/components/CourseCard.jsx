import React from 'react'
import Image from './image'
 
const CourseCard = ({coursename,price,review,img}) => {
  return (
    <div className='card_item'>
        <div className='card_img'>
          <Image source={img} alt ="not found"/>
        </div>
        <div className='card_details'>
              <h5> All Courses</h5>
              <h3> {coursename} </h3>
              <span> Review: {review} </span>
              <h6> Price : {price} </h6>
        </div>
    </div>
  )
}

export default CourseCard
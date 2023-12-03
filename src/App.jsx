import { useState } from 'react'
import Heading from './components/Heading'
import Peragraph from './components/peragraph'
import CourseCard from './components/CourseCard'
import CourseImg  from './assets/images/web.jpg'
import CourseImgs from './assets/images/ethical.jpg'

console.log(CourseImgs);

console.log(CourseImg);

  let dummyCourse = [
    {
      id:1,
      coursename :" MERN Stack Development",
      price :"40,000",
      review : "1000",
      img : CourseImg, 
  
    },

    {
      id:2,
      coursename :" Ethical Hacking",
      price :"40,000",
      review : "11000",
      img : CourseImgs, 
  
    },

    {
      id:3,
      coursename :" wordpress",
      price :"5000",
      review : "15000",
      img : CourseImgs, 
  
    },
  ]

function App() {
  const [count, setCount] = useState(0)
  return (
    <>
      <Heading text="murad" style="one"/>
      <Heading text="Joy Chowdhury" style="two"/>
      <Peragraph text="function body braces" style="three"/>
      <div className='course_wrapper'>

        {dummyCourse.map((item)=>(
      <CourseCard img={item.img} coursename={item.coursename} price={item.price} review={item.review}/>
        ))}
      </div>
    </>
  )
}
export default App

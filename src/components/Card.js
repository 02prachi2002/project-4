import React from 'react'
import {FcLike, FcLikePlaceholder} from "react-icons/fc"
import { toast } from 'react-toastify';

const Card = (props) => {
  
let course = props.course;
let likedcourses = props.likedcourses;
let setlikedcourses = props.setlikedcourses;
 function clickhandler()
 {
  if (likedcourses.includes(course.id)){
    setlikedcourses((prev) => prev.filter((cid) =>(cid !== course.id)))
    toast.warning("like removed")
  }
  else {
    if(likedcourses.length ===0)
    {
      setlikedcourses([course.id])
    }
    else{
      setlikedcourses((prev)=>[...prev , course.id])
    }
    toast.success("liked successfully")
  }
 }
  return (
    <div>
        <div>
            <img src={course.image.url}/>
        </div>
        <div>
            <button onClick={clickhandler}>
               {
                likedcourses.includes(course.id) ? ( <FcLikePlaceholder/>) :( <FcLike/>)
               }
            </button>
        </div>
        <div>
            <p>{course.title}</p>
            <p>{course.description}</p>
            </div>
    </div>
  )
}

export default Card

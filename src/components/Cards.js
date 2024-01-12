import './Cards.css'
import Card from './Card'
import {useState} from 'react';
function Cards(props){
    let courses= props.courses;
    let category = props.category
    const [likedcourses,setlikedcourses]= useState([])
    function getcourses(){
        if (category === 'All')
        {
            let allcourses=[];
            Object.values(courses).forEach(array => {
                array.forEach(coursedata => {
                    allcourses.push(coursedata);
                })
            })
            return allcourses;
        }
       else{
        return courses[category]
       }
    }
    return(
        <div>
            {
                getcourses().map((course) =>(
                    <Card key={course.id}
                     course={course}
                    likedcourses = {likedcourses}
                    setlikedcourses={setlikedcourses}/>
                ))
            }
        </div>
    );
}
export default Cards;
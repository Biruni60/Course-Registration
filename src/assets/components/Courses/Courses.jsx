
import { useEffect } from "react";
import { useState } from "react";
import Course from "../Course/Course";
import PropTypes from 'prop-types';


const Courses = ({addBookmark}) => {
    const [courses,setCourses]=useState([])
    useEffect(()=>{
    fetch('course.json')
    .then(res=>res.json())
    .then(data=>setCourses(data))
      
    },[])

   
    return (
        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-4 md:w-2/3" >
           {
            courses.map(course=><Course key={course.id} course={course} addBookmark={addBookmark}></Course>)
           }
        </div>
    );
};
Courses.propTypes={
    addBookmark: PropTypes.func
}
export default Courses;
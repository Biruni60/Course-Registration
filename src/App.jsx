
import './App.css'
import Courses from './assets/components/Courses/Courses'
import Header from './assets/components/Header/Header'
import Bookmarks  from './assets/components/Bookmarks/Bookmarks'
import { useState } from 'react'
import Swal from 'sweetalert2'

function App() {
  const[bookMarks,setBookMarks]=useState([]);
  const [totalHour,setTotalHour]=useState(0)
  const [remainingHour,setRemainingHour]=useState(20)
  const addBookmark=course=>{
    const isExist=bookMarks.find(item=>item.id==course.id)
    let count=course.credit_hour;
    bookMarks.forEach(item=>{count=count+item.credit_hour})
    const remaining=20-count;
    if(isExist){
      Swal.fire({
        icon: 'error',
        title: 'Oops...',
        text: 'already added'
       
      })
    }
   else{
    if(count>20){
    return Swal.fire({
        icon: 'error',
        title: 'Oops...',
        text: 'Hour exceeded'
       
      })
    }
    const newBookMarks=[...bookMarks,course]
   setBookMarks(newBookMarks)

  setTotalHour(count)
  setRemainingHour(remaining)
 
   }

  }

  return (
    <>
     <div className='max-w-screen-xl mx-auto'>
      <Header></Header>
      <div className='md:flex gap-2'>
        <Courses addBookmark={addBookmark}></Courses>
        <Bookmarks bookMarks={bookMarks} totalHour={totalHour} remainingHour={remainingHour}></Bookmarks>
      </div>
     </div>
    </>
  )
}

export default App

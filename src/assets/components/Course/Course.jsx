import PropTypes from 'prop-types';
import { FaDollarSign } from 'react-icons/fa'
import { FaRegBookmark} from 'react-icons/fa'

const Course = ({course,addBookmark}) => {
    const{title,description,course_cover_img,price,credit_hour}=course;
   
    return (
        <div className='text-slate-500'>
         <div className="card  bg-base-100 shadow-xl h-full">
  <figure className="px-10 pt-10">
    <img src={course_cover_img} className="rounded-xl h-60" />
  </figure>
  <div className="card-body">
    <h2 className="card-title  items-center text-center text-black">{title}</h2>
    <p className=' items-center text-center'>{description}</p>
    <div className='flex justify-between'>
        <p className='flex items-center'><FaDollarSign className='text-black'></FaDollarSign>Price:{price}</p>
        <p className='flex items-center'><FaRegBookmark className='text-black'></FaRegBookmark>Credit:{credit_hour} hr</p>
    </div>
    <div className="card-actions">
      <button onClick={()=>addBookmark(course)} className="btn btn-primary w-full">Select</button>
    </div>
  </div>
</div>   
        </div>
    );
};
Course.propTypes={
    course: PropTypes.object.isRequired,
    addBookmark: PropTypes.func
}
export default Course;
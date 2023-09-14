
import PropTypes from 'prop-types'
import Bookmark from '../Bookmark/Bookmark';

const Bookmarks = ({bookMarks,totalHour,remainingHour}) => {
console.log(bookMarks.length);
    return (
        <div className="md:w-1/3">
           <div className="card  bg-base-100 shadow-xl">
  <div className="card-body">
    <h2 className="text-lg font-bold text-blue-600">Credit Hour Remaining {remainingHour} hr</h2>
    <div className="divider"></div> 
    <div>
        <h2 className="text-xl font-bold">Course Name</h2>
        {bookMarks.map((bookMark,idx)=> <Bookmark key={idx} bookMark={bookMark}></Bookmark>)}
    </div>
    <div className="divider"></div>
    <h2 className="text-base font-semibold">Total Credit Hour :{totalHour}</h2>
  </div>
</div> 
        </div>
    );
};
Bookmarks.propTypes={
    bookMarks: PropTypes.array,
    totalHour: PropTypes.number,
    remainingHour:PropTypes.number
}
export default Bookmarks;
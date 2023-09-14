
import PropTypes from 'prop-types'
const Bookmark = ({bookMark}) => {
    const {title}=bookMark;
    return (
        <div>
          <li>{title}</li> 
        </div>
    );
};
Bookmark.propTypes={
    bookMark: PropTypes.object.isRequired
}
export default Bookmark;

import './App.css'
import Courses from './assets/components/Courses/Courses'
import Header from './assets/components/Header/Header'
import Bookmarks  from './assets/components/Bookmarks/Bookmarks'
function App() {
  

  return (
    <>
     <div className='max-w-screen-xl mx-auto'>
      <Header></Header>
      <div>
        <Courses></Courses>
        <Bookmarks></Bookmarks>
      </div>
     </div>
    </>
  )
}

export default App

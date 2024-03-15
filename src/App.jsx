import Blogs from "./components/Blogs/Blogs"
import Bookmarks from "./components/Bookmarks/Bookmarks"
import Header from "./components/Header/Header"
import './index.css'


function App() {
  
  return (
    <>
       <Header></Header>
       <div className="md:flex ">
          <Blogs></Blogs>
          <Bookmarks></Bookmarks>
       </div>
    </>
  )
}

export default App

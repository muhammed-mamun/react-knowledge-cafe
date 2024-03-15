import { useState } from "react"
import Blogs from "./components/Blogs/Blogs"
import Bookmarks from "./components/Bookmarks/Bookmarks"
import Header from "./components/Header/Header"
import './index.css'


function App() {
  const [bookmarks, setBoookmarks] = useState([])
  const [readingTime, setReadingTime] = useState(0)

  const handleAddToBookmark = (blog) =>{
    const newBookmarks = [...bookmarks,blog ];
    setBoookmarks(newBookmarks)
  }

  const handleMarkAsRead = time =>{
    const newReadingTime = readingTime + time;
    setReadingTime(newReadingTime)
  }
  return (
    <div className="max-w-7xl">
       <Header></Header>
       <div className="md:flex mx-auto">
          <Blogs handleAddToBookmark={handleAddToBookmark} handleMarkAsRead={handleMarkAsRead}></Blogs>
          <Bookmarks bookmarks={bookmarks} readingTime={readingTime}></Bookmarks>
       </div>
    </div>
  )
}

export default App

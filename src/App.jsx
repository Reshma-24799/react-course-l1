import { useState } from "react";
import PostList from "./components/PostList"
import MainHeader from "./components/MainHeader";
function App() {
  const [showModal, setShowModal] = useState(false);
  function hideModalHandler() {
    setShowModal(false);
  }
  function showModalHandler() {
    setShowModal(true);
  }
  return (
    <>
      <MainHeader 
        onCreatePost={showModalHandler}
      />
      <main>
        <PostList 
          isPosting={showModal} 
          onStopPosting={hideModalHandler}
        />
      </main>
    </>
      
  )
}
export default App

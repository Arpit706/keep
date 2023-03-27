
import { useState } from 'react';
import './App.css';
import EditModal from './components/EditModal';
import Form from './components/Form';
import Navbar from './components/Navbar';
import Note from './components/Note';
import Pagination from './components/Pagination';
// import ReactPageinate from "react-pagination"


function App() {
const [title,setTitle] = useState("");
const [tagline,setTagline] = useState("");
const [desc,setDesc] = useState("")
const[notes,setNotes] = useState([])
const[editid,setEditid] = useState("");
const [isPinned, setIsPinned] = useState(false);
const[currentPage,setCurrentPage] = useState(1)
const [postPerPage,setPostPerPage] = useState(6)
localStorage.setItem("Numbernotes",JSON.stringify(notes))
  
const lastPostIndex = currentPage * postPerPage
 const firstPostIndex = lastPostIndex - postPerPage
  const currentPosts=notes.slice(firstPostIndex,lastPostIndex)



return (
    <>
 
<Navbar/>
  <EditModal editid={editid}notes={currentPosts} setNotes={setNotes}/>
<Form title={title} setTitle={setTitle} desc={desc} setDesc={setDesc} notes={currentPosts} setNotes={setNotes} tagline={tagline} setTagline={setTagline}/>
<div className="container">
  <div className="row justify-content:center">
    <div className="col-md-10">
      <h1 className='mb-3'>Your Notes</h1>
 

  {
    notes.length===0?
    <div className="card mb-3">
        <div className="card-body" >
            <h5 className="card-title">Message</h5>
            <p className="card-text">No notes are available</p>
        </div>
    </div>
    :
      notes.map((element)=>{
        return(
          <Note element={element} key={element.id} title={title} desc={desc} tagline={tagline} notes={currentPosts} setNotes={setNotes} setEditid={setEditid} isPinned={isPinned} setIsPinned={setIsPinned}/>
        )
      })
}
{/* <Pagination totalPosts={notes.length}
postPerPage={postPerPage}
setCurrentPage={setCurrentPage}
/> */}


    </div>
  </div>


</div>
     </>
  );


  function getNotesFromLs(){
const note= JSON.parse(localStorage.getItem("notes"));
 if(note){
  return note
 }else{
  return [];
 }


}

}

export default App;

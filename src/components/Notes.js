import React ,{useContext} from 'react'
import noteContext from "../context/notes/noteContext"
//import noteContext from "../context/NoteState"
import Noteitem from './Noteitem';

const Notes = () => {
    const context = useContext(noteContext);
  
     const { notes, setNotes }= context;
  return (
    <div className="container my-3"> <h1>  Your Notes
    {notes.map((note) => {return <Noteitem  note={note}/>})}
  </h1></div>
  )
}

export default Notes
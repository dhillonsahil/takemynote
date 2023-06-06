import React, { useContext, useState } from 'react'
import NotesContext from '../context/notes/NotesContext'
export default function AddNote() {
  const notescont = useContext(NotesContext);
  const { addNote } = notescont;

  const handleClick =(e)=>{
    e.preventDefault();
    addNote(note.title,note.description,note.tag)
  }

  const [note,setNote] = useState({title:"",description:"",tag:"General"})
  const onchange = (e)=>{
    setNote({...note,[e.target.name]:e.target.value})
  }
  return (
    <div className='container my-3'>
      <h2>Add a note</h2>
      <div className="mb-3">
        <label htmlFor="exampleFormControlInput1" className="form-label">Add Title</label>
        <input type="text" className="form-control" onChange={onchange} id="title" name="title" placeholder="Today's Task" />
      </div>
      <div className="mb-3">
        <label htmlFor="desc" className="form-label">Enter Note</label>
        <textarea className="form-control" onChange={onchange} id="description" name="description" rows="3"></textarea>
      </div>
      <button className='btn btn-primary' onClick={handleClick}>Save Note</button>
    </div>
  )
}

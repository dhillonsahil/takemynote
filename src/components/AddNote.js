import React, { useContext, useState } from 'react'
import NotesContext from '../context/notes/NotesContext'
export default function AddNote(props) {
  const notescont = useContext(NotesContext);
  const { addNote } = notescont;

  const handleClick = (e) => {
    e.preventDefault();
    addNote(note.title, note.description, note.tag)
    setNote({ title: "", description: "", tag: "" })
    props.showAlert("Note Added Succesfully","success")
  }

  const [note, setNote] = useState({ title: "", description: "", tag: "General" })
  const onchange = (e) => {
    setNote({ ...note, [e.target.name]: e.target.value })
  }
  return (
    <div className='container my-3'>
      <h2>Add a note</h2>
      <form action="" className="my-3">
        <div className="mb-3">
          <label htmlFor="exampleFormControlInput1" className="form-label">Add Title</label>
          <input type="text" className="form-control" onChange={onchange} id="title" name="title" value={note.title} placeholder="Today's Task" />
        </div>
        <div className="mb-3">
          <label htmlFor="description" className="form-label">Enter Note</label>
          <textarea className="form-control" onChange={onchange} id="description" name="description" value={note.description} rows="3"></textarea>
        </div>
        <div className="mb-3">
          <label htmlFor="tag" className="form-label">Enter Tag</label>
          <input type="text" className="form-control" onChange={onchange} id="tag" name="tag" placeholder="General" value={note.tag}  />
       
           </div>
        <button disabled={note.title.length<5 ||  note.description.length<5} className='btn btn-primary' onClick={handleClick}>Save Note</button>
      </form>
    </div>
  )
}

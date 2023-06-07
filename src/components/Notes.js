import { useContext, useEffect, useRef, useState } from 'react'

import NotesContext from '../context/notes/NotesContext'
import NoteItem from './NoteItem';
import AddNote from './AddNote';
export default function Notes() {

    const notescont = useContext(NotesContext);
    const { note, getNotes ,editNote} = notescont;
    const [nt, setNt] = useState({id:"", etitle: "", edescription: "", etag: "General" })
    useEffect(() => {
        getNotes();
        // eslint-disable-next-line
    }, [])

    const refclose = useRef(null)
    const ref = useRef(null)
    const updateNote = (currentnote) => {
        ref.current.click(); 
        setNt({id:currentnote._id ,etitle : currentnote.title, edescription:currentnote.description,etag:currentnote.tag})
    }
    
    const handleclick= async (e)=>{
        console.log("Updating the note",nt)
        editNote(nt.id,nt.etitle,nt.edescription,nt.etag)
        refclose.current.click()
        // e.preventDefault();
        
    }
    const onChange = (e)=>{
        setNt({...nt, [e.target.name]: e.target.value})
    }
    return (
        <>
            <AddNote />
            <button ref={ref} type="button" hidden={true} className="btn btn-primary" data-bs-toggle="modal" data-bs-target="#exampleModal">
                Edit Note
            </button>
            <div className="modal fade" id="exampleModal" tabIndex="-1" aria-labelledby="exampleModalLabel" aria-hidden="true">
                <div className="modal-dialog">
                    <div className="modal-content">
                        <div className="modal-header">
                            <h1 className="modal-title fs-5" id="exampleModalLabel">Edit Note</h1>
                            <button type="button" className="btn-close" data-bs-dismiss="modal" aria-label="Close"></button>
                        </div>
                        <div className="modal-body">
                            <form action="" className="my-3">
                                <div className="mb-3">
                                    <label htmlFor="title" className="form-label">Update Title</label>
                                    <input type="text" className="form-control" id="etitle" name="etitle" value={nt.etitle} placeholder="Today's Task"  onChange={onChange}  />
                                </div>
                                <div className="mb-3">
                                    <label htmlFor="description" className="form-label">Update Note</label>
                                    <textarea className="form-control" id="edescription" name="edescription" rows="3" value={nt.edescription}  onChange={onChange} ></textarea>
                                </div>
                                <div className="mb-3">
                                    <label htmlFor="tag" className="form-label">Update Tag</label>
                                    <input type="text" className="form-control" id="etag" name="etag" placeholder="Today's Task" value={nt.etag}  onChange={onChange}  />
                                </div>
                            </form>
                        </div>
                        <div className="modal-footer">
                            <button ref={refclose} type="button" className="btn btn-secondary" data-bs-dismiss="modal">Close</button>
                            <button type="button" className="btn btn-primary" onClick={handleclick}>Save changes</button>
                        </div>
                    </div>
                </div>
            </div>
            <div className="row my-3">
                <h2>Your Notes</h2>
                {note.map((element) => {
                    return <NoteItem key={element._id} updateNote={updateNote} note={element} />
                })}
            </div>
        </>
    )
}

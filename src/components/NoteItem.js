import React, { useContext } from 'react'
import NotesContext from '../context/notes/NotesContext';

export default function NoteItem(props) {
    const context = useContext(NotesContext)
    const {deleteNote } = context;
    const { note } = props;

    // handle delete
    const handleDelete = () => {
        deleteNote(note._id);
      };
    return (
        <div className='col-md-3'>
            <div className="card my-3" >
                <div className="card-body align-items-end">
                    <div className="d-flex">
                    <h5 className="card-title">{note.title} </h5>
                    <i className="fa-solid fa-pen-to-square mx-2"></i>
                    <i className="fa-solid fa-trash  mx-2" onClick={handleDelete}></i>
                    </div>
                    <p className="card-text">{note.description}</p>
                </div>
            </div>
        </div>
    )
}

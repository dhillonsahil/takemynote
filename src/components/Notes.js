import { useContext } from 'react'

import NotesContext from '../context/notes/NotesContext'
import NoteItem from './NoteItem';
import AddNote from './AddNote';
export default function Notes() {

    const notescont = useContext(NotesContext);
    const { note } = notescont;
    return (
        <>
        <AddNote />
        <div className="row my-3">
            <h2>Your Notes</h2>
            {note.map((element) => {
                return <NoteItem key={element._id} note={element} />
            })}
        </div>
        </>
    )
}

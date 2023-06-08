import { useState } from "react";
import NotesContext from "./NotesContext";
const NotesState = (props) => {
  const host = "http://localhost:5000/"
  const nt = []
  const [note, setNote] = useState(nt);

  // get all notes
  const getNotes = async () => {
    // api call
    try {
      const response =await fetch(`${host}api/notes/fetchallnotes`, {
        method: 'GET',
        headers: {
          'Content-Type': 'application/json',
          'auth-token': localStorage.getItem('token')
        }
      });
      const json = await response.json()
      setNote(json)
    } catch (error) {
      console.log("Error fetching notes:", error);
    }
  }
  //add a note
  const addNote = async (title, description, tag) => {
    // api call
    const response =await fetch(`${host}api/notes/addnote`, {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json',
        'auth-token': localStorage.getItem('token')
      },
      body: JSON.stringify({ "title":title,"description": description, "tag":tag })
      // body: {title,description,tag }
    });
    const nt = await response.json()
    setNote(note.concat(nt))
  }
 
  // delete a note
  const deleteNote = async(id) => {
    // const response =
    await fetch(`${host}api/notes/deletenote/${id}`,{
      method:'DELETE',
      headers: {
        'Content-Type': 'application/json',
        'auth-token': localStorage.getItem('token')
      }
    });
    let newnotes = note.filter((e) => { return e._id !== id })
    setNote(newnotes)
    // const json =response.json();
  }
  // edit a note
  const editNote = async (id, title, description, tag) => {
    // api call
    // const response = 
    await fetch(`${host}api/notes/updatenote/${id}`, {
      method: 'PUT',
      headers: {
        'Content-Type': 'application/json',
        'auth-token': localStorage.getItem('token')
      },
      body: JSON.stringify({ title, description, tag })
    });
    // const json = await response.json();
    // logic to edit in client
    let newNotes = JSON.parse(JSON.stringify(note));
    for (let index = 0; index < newNotes.length; index++) {
      const element = newNotes[index];
      if (element._id === id) {
        newNotes[index].title = title;
        newNotes[index].tag = tag;
        newNotes[index].description = description;
        break;
      }
    }
    setNote(newNotes)
  }


  return (
    <NotesContext.Provider value={{ note, setNote, addNote, deleteNote, editNote,getNotes }}>
      {props.children}
    </NotesContext.Provider>
  )
}
export default NotesState;
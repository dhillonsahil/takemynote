import { useState } from "react";
import NotesContext from "./NotesContext";
const NotesSate = (props) => {
  const host = "http://localhost:5000/"
  const nt = []
  const [note, setNote] = useState(nt);

  // get all notes
  const getNotes = async () => {
    // api call
    const response =await fetch(`${host}api/notes/fetchallnotes`, {
      method: 'GET',
      headers: {
        'Content-Type': 'application/json',
        'auth-token': "eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJ1c2VyIjp7ImlkIjoiNjQ3ZGUyNmVlNjc1NTM1ZGZmNDVhZDUwIn0sImlhdCI6MTY4NjA0NzMwMH0.HUZPMMMm9SYHwXjr9eCQv35iT7CxoaJyLcS03XUvxmU"
      }
    });
    const json = await response.json()
    setNote(json)
  }
  //add a note
  const addNote = async (title, description, tag) => {
    // api call
    const response =await fetch(`${host}api/notes/addnote`, {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json',
        'auth-token': "eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJ1c2VyIjp7ImlkIjoiNjQ3ZGUyNmVlNjc1NTM1ZGZmNDVhZDUwIn0sImlhdCI6MTY4NjA0NzMwMH0.HUZPMMMm9SYHwXjr9eCQv35iT7CxoaJyLcS03XUvxmU"
      },
      body: JSON.stringify({ "title":title,"description": description, "tag":tag })
      // body: {title,description,tag }
    });
    // let no = {
    //   "_id": "647de2b5e675535dff45ad54",
    //   "user": "647de26ee675535dff45ad50",
    //   "title": title,
    //   "description": description,
    //   "tag": tag,
    //   "date": "2023-06-05T13:27:17.293Z",
    //   "__v": 0
    // };
    // setNote(note.concat(no))
    getNotes()
  }
 
  // delete a note
  const deleteNote = async(id) => {
    const response =await fetch(`${host}api/notes/deletenote/${id}`,{
      method:'DELETE',
      headers: {
        'Content-Type': 'application/json',
        'auth-token': "eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJ1c2VyIjp7ImlkIjoiNjQ3ZGUyNmVlNjc1NTM1ZGZmNDVhZDUwIn0sImlhdCI6MTY4NjA0NzMwMH0.HUZPMMMm9SYHwXjr9eCQv35iT7CxoaJyLcS03XUvxmU"
      }
    });
    let newnotes = note.filter((e) => { return e._id !== id })
    setNote(newnotes)
    const json =response.json();
  }
  // edit a note
  const editNote = async (id, title, description, tag) => {
    // api call
    const response = await fetch(`${host}api/notes/updatenote/${id}`, {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json',
        'auth-token': "eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJ1c2VyIjp7ImlkIjoiNjQ3ZGUyNmVlNjc1NTM1ZGZmNDVhZDUwIn0sImlhdCI6MTY4NjA0NzMwMH0.HUZPMMMm9SYHwXjr9eCQv35iT7CxoaJyLcS03XUvxmU"
      },
      body: JSON.stringify({ title, description, tag })
    });
    const json = response.json();
    // logic to edit in client
    for (let index = 0; index > note.length; index++) {
      const element = note[index];
      if (element._id === id) {
        element.title = title;
        element.tag = tag;
        element.description = description;
      }
    }
  }


  return (
    <NotesContext.Provider value={{ note, setNote, addNote, deleteNote, editNote,getNotes }}>
      {props.children}
    </NotesContext.Provider>
  )
}
export default NotesSate;
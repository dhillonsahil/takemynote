import React ,{useContext , useEffect} from 'react'
import NotesContext from '../context/notes/NotesContext'
export default function About() {
    const a = useContext(NotesContext)
    useEffect(()=>{
        a.update()
        // eslint-disable-next-line
    },[])
  return (
    <div>My Name is {a.state.name} and i study in {a.state.class}</div>
  )
}

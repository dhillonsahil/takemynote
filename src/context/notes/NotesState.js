import NotesContext from "./NotesContext";
import { useState } from "react";
const NotesSate = (props) =>{
    const st = {
        "name":"Sahil",
        "class" : "MCA"
    }
    const [state,setState] = useState(st)
    const update= ()=>{
        setTimeout(()=>{
            setState({
                "name":"Sahil Dhillon",
                "class" : "PHD"
            })
        },2000)
    }
    return(
        <NotesContext.Provider value={{state,update}}>
            {props.children}
        </NotesContext.Provider>
    )
}
export default NotesSate;
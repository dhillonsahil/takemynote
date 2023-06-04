import NotesContext from "./NotesContext";
const NotesSate = (props) =>{
    
    return(
        <NotesContext.Provider value={{}}>
            {props.children}
        </NotesContext.Provider>
    )
}
export default NotesSate;
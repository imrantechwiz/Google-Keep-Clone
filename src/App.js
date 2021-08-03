import { useState } from 'react';
import './App.css';
import Header from "./Components/Header";
import CreateArea from "./Components/CreateArea";
import Note from "./Components/Note";
import Footer from './Components/Footer';
function App() {
  const[notes, setNotes] = useState([]);
  const addNote = (newNotes) =>{
    setNotes((oldValue) =>
    {
      return [...oldValue, newNotes];
      
    });
  }
  const deleteNote = (id) =>{
    setNotes((oldValue) =>{
      return [...oldValue.filter((note,index) =>
      index !== id)];
      
    });
  }
  return(
    <>
    <Header/>
    <div className ="Notearea">
    <CreateArea onAdd = {addNote}/>
    {notes.map((note, index) =>
    {return(
      <Note 
        key = {index}
        id = {index}
        title = {note.title}
        content = {note.content}
        onDelete ={deleteNote}/>) ;
    })}
    </div>
    <Footer/>
    </>
  );
}

export default App;

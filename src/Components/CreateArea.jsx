import React from 'react';
import { useState } from 'react';

function CreateArea ({onAdd}){
    const[isExpended, setExpended ] = useState(false);
    const [note, setNote] = useState({
        title: "",
        content: "",
    });

    const handleChange = (event) =>{
        const {name,value} = event.target;
        setNote((oldvalue) =>{
          return{
            ...oldvalue,
            [name]: value
          };
        });
    };

    const submitButton = (event) =>{
        onAdd(note);
        event.preventDefault();
        setNote(
            {
                title: "",
                content: "",
            }
        )
        setExpended(false);
    }

    const handleExpend= () =>{
        setExpended(true);
    }

    return (
        <div className="add">
            <form>
                {isExpended && (
                <input type = "text" placeholder="Title" name="title" value = {note.title} onChange={handleChange} autoComplete="off"/>
                )}
                <p>
                    <textarea name = "content" placeholder = "Take a Note...." value = {note.content} onChange={handleChange} onClick={handleExpend} rows= {isExpended ? 3:1}></textarea>
                </p>
                <button onClick = {submitButton}>+</button>
            </form>

        </div>
    )

}
export default CreateArea;
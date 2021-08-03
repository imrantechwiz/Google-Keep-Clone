import React from 'react';

function Note (props){

    return (
        <div className="note">
            <h1>{props.title}</h1>
            <p>{props.content}</p>
            <button onClick = {() => props.onDelete(props.id)}><i class="fas fa-trash"></i></button>
        </div>
    )

}
export default Note;
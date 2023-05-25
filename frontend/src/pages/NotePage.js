import React, {useState, useEffect} from 'react';
import { useParams, useNavigate } from 'react-router-dom';
// import notes from '../assets/data';
import { ReactComponent as ArrowLeft } from '../assets/arrow-left.svg';

const NotePage = (history) => {
  let { id } = useParams();
  const navigate = useNavigate();
  // const note = notes.find(note => note.id === Number(id));

  let [note, setNote] = useState(null)

  useEffect(() =>{
    getNote()
  }, [id])

  let getNote = async () =>{
    if (id === 'new') return

    let response = await fetch(`/api/notes/${id}/`)
    let data = await response.json()
    setNote(data)
  }

  let createNote = async () =>{
    fetch(`/api/notes/`,{
        method: 'POST',
        headers: {
            'Content-Type': 'application/json'
        },
        body: JSON.stringify(note)
    })

  }

  let updateNote = async () =>{
    fetch(`/api/notes/${id}/`,{
        method: 'PUT',
        headers: {
            'Content-Type': 'application/json'
        },
        body: JSON.stringify(note)
    })

  }

  let deleteNote = async () => {
    fetch(`/api/notes/${id}/`,{
        method: 'DELETE',
        headers: {
            'Content-Type': 'application/json'
        },
        
    })
    navigate('/')
  }

  let handleSubmit = () => {

        if (id !== "new" && note.body === '') {
            deleteNote()
        } else if (id !== "new") {
            updateNote()
        } else if (id === 'new' && note !== null && note.body !== null && note.body !== ''){
            createNote()
        }

        // Check if none of the conditions were satisified
        if (id !== 'new' && note!== null && note.body === '' && note.title === ''){
          navigate('/')
        }else{
          navigate('/')
        }

}

  return (
    <div className="note">
      <div className="note-header">
        <h3>
      
            <ArrowLeft onClick={handleSubmit} />
     
        </h3>

        {id !== 'new' ? (
            <button onClick={deleteNote}>Delete</button>
        ): (
            <button onClick={handleSubmit}>Done</button>
        )}
        
      </div>
      
      <textarea onChange = {(e)=> {setNote({...note, 'body':e.target.value})}} value={note?.body}>

      </textarea>
    </div>
  );
};

export default NotePage;

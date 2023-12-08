import React from 'react';
import { MdDone } from "react-icons/md";
import { MdModeEditOutline } from "react-icons/md";
import { Link } from 'react-router-dom';

const Item = ({todo, id}) => {

  function handleDelete(id){
    fetch('http://localhost:8000/todolist/' + id, {
      method: "DELETE",
    }).then(() => {
      console.log("data deleted")
    })
  }

  function onEdit(id){
    const edit = {todo, isEdit: true}

    fetch('http://localhost:8000/todolist/' + id, {
      method: "PUT",
      headers: {"Content-Type": "application/json"},
      body: JSON.stringify(edit)
    })
  }

  return (
    <div className='flex justify-between px-3 py-2.5 rounded-full w-[450px] border-2 border-yellow-400'>
      <Link to={`/detail/${id}`}><p>{todo}</p></Link>
      <div className='flex gap-3'>
        <button onClick={() => onEdit(id)} className='text-2xl'><MdModeEditOutline color='#9f7aea'/></button>
        <button onClick={() => handleDelete(id)} className='text-2xl'><MdDone color='#00df9a'/></button>
      </div>
    </div>
  );
}

export default Item;

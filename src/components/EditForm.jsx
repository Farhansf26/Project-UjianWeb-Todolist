import React, { useState } from 'react';
import useFetch from '../hooks/useFetch';

const EditForm = ({todo, id}) => {
  const [todoEdit, setTodoEdit] = useState(todo)
  const {data} = useFetch('http://localhost:8000/todolist/' + id)

  function handleEditChange(e){
    setTodoEdit(e.target.value)
  }

  function handleUpdate(e){
    e.preventDefault()

    const updateData = {todo: todoEdit, isEdit: false}

    fetch('http://localhost:8000/todolist/' + data.id, {
      method: "PUT",
      headers: {"Content-Type": "application/json"},
      body: JSON.stringify(updateData)
    })
    .then(() => {
      console.log('todo edited')
    })
  }

  return (
    <div className='rounded-full w-[450px] border-2 border-purple-500'>
      {data && 
      <form onSubmit={handleUpdate} className='flex justify-between'>
        <input className='bg-black outline-none w-[350px] py-2.5 px-3 rounded-full' maxLength={30} type={'text'} value={todoEdit} onChange={handleEditChange}/>
        <button className='text-purple-500 font-bold px-5 rounded-full'>Update</button>
      </form>}
    </div>
  );
}

export default EditForm;

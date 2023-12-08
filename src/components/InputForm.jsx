import React, { useState } from 'react';

const InputForm = () => {
  const [todo, setTodo] = useState('') 

  function handleTodoChange(e){
    setTodo(e.target.value)
  }

  function handleSubmit(e){
    e.preventDefault()
    const task = {todo, isEdit: false}

    fetch('http://localhost:8000/todolist', {
      method: "POST",
      headers: {"Content-Type": "application/json"},
      body: JSON.stringify(task)
    })
    .then(() => {
      console.log('todo added')
      setTodo('')
    })
  }

  return (
    <div className='w-[440px]'>
      <form onSubmit={handleSubmit} className='h-[40px]'>
        <input maxLength={30} required type={'text'} value={todo} onChange={handleTodoChange} 
        className='w-[360px] h-[98%] outline-none rounded-full text-black px-3 pr-8'/>
        <button className='px-6 bg-emerald-800 font-bold rounded-full ml-[-30px] h-[100%]'>Submit</button>
      </form>
    </div>
  );
}

export default InputForm;

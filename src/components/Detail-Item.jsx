import React from 'react';
import { useParams } from 'react-router-dom';
import useFetch from '../hooks/useFetch';
import { useNavigate } from 'react-router-dom';

const DetailItem = () => {
  const {id} = useParams()
  const {data, error, isLoading} = useFetch('http://localhost:8000/todolist/' + id)
  const navigate = useNavigate()

  function isCompleted(){
    fetch('http://localhost:8000/todolist/' + data.id, {
      method: "DELETE",
    })
    .then(() => {
      navigate('/')
    })
  }

  return (
    <div>
      {error && <>{error}</>}
      {isLoading && <>Loading...</>}
      {data &&
      <div className='flex flex-col gap-16 items-center border-4 w-[700px] text-center mx-auto p-10 rounded-3xl border-yellow-400'>
        <p className='text-6xl font-bold uppercase break-all'>{data.todo}</p>
        <div className='flex flex-col items-center gap-5'>
          <p className='text-xl'>Apakah anda sudah mengerjakannya?</p>
          <button onClick={isCompleted} className='bg-emerald-700 py-3 rounded-full w-[100%] text-xl'>YA</button>
        </div>
      </div>}
    </div>
  );
}

export default DetailItem;

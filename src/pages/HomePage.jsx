import React from 'react';
import InputForm from '../components/InputForm';
import ItemList from '../components/Item-List';
import UseFetch from '../hooks/useFetch';

const HomePage = () => {
  const {data, isLoading, error} = UseFetch('http://localhost:8000/todolist')

  return (
    <div className='flex flex-col justify-center items-center'>
      <h1 className='text-3xl md:text-4xl font-bold'>TODOLIST <span className='text-[#00df9a]'>APP</span></h1>
      <p className='mt-7 mb-2'>Apa plan anda hari ini?</p>
      <div>
        <InputForm/>
      </div>
      <div className='mt-4'>
        {error && <>{error}</>}
        {isLoading && <>Loading...</>}
        {data && <ItemList data={data}/>}
      </div>
    </div>
  );
}

export default HomePage;

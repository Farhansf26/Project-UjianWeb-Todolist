import React from 'react';
import EditForm from './EditForm';
import Item from './Item';

const ItemList = ({data}) => {
  
  if(data.length === 0){
    return <p>Tidak ada plan</p>
  }

  return (
    <div>
      <div className='flex flex-col gap-2'>
        {data.map((item, i) => {
          if(item.isEdit){
            return <EditForm key={i} {...item}/>
          }else{
            return <Item key={i} {...item}/>
          }
        })}
      </div>
    </div>
  );
}

export default ItemList;

import React from 'react';

function Pencil() {
  return (
    <div className='pencil-container'>
      {' '}
      <div className='pencil-line'></div>
      <div className='pencil'>
        <div className='pencil__triangle'>
          <div className='pencil__inside'></div>
        </div>
        <div className='pencil__main'></div>
      </div>
    </div>
  );
}

export default Pencil;

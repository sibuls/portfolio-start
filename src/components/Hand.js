import React from 'react';

function Hand(props) {
  return (
    <div className='hand'>
      <div className='fingers finger-index'></div>
      <div className='fingers finger-middle'>
        <div className='finger-middle--nail'></div>
      </div>
      <div className='fingers finger-middle--back'></div>

      <div className='fingers  finger-ring'>
        <div className='finger-ring--nail'></div>
      </div>
      <div className='fingers  finger-ring--back'></div>
      <div className='fingers   finger-pinky'>
        <div className='finger-pinky--nail'></div>
      </div>
      <div className='fingers   finger-pinky--back'></div>
      <div className='fingers  finger-thumb'>
        <div className='finger-thumb--nail'></div>
      </div>
      <div className='fingers finger-thumb--back'></div>

      <div class='box'></div>

      <div className='hand limb wrist'></div>
      <div className='hand limb shirt'></div>
      <div className='hand limb  jacket'></div>
    </div>
  );
}

export default Hand;

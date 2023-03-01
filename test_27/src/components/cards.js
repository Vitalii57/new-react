import React from 'react';

export default function cards(props) {

  return (
    <div className='card'>
        {props.img}
        <div className='card-block'>
            <h5 className='card-title'>{props.title}</h5>
            <p className='card-text'>{props.text}</p>
            <button className='card-button'><a className='button' href='#'>Go somewhere</a></button>
        </div>
        
    </div>
  )
}

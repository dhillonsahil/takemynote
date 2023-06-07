import React from 'react'

export default function Alert(props) {
  return (
    <div className='container my-2'>
        <div className="alert alert-success" role="alert">
            {props.message}
</div>
    </div>
  )
}

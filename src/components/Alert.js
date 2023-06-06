import React from 'react'

export default function Alert(props) {
  return (
    <div className='container'>
        <div className="alert alert-sucess" role="alert">
            {props.message}
</div>
    </div>
  )
}

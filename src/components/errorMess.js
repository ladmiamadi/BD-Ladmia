import React from 'react'
function ErrorMess (props)
{
    return (
        <div className='text-danger'>
            {props.children}
        </div>
    )
}

export default ErrorMess
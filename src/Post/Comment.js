import React from 'react'

const Comment = (props) => 
    <div className="comment">
        <div>
            <h3>{ props.email }</h3>
            <p>{ props.comment }</p>
        </div>
    </div>

export default Comment
import React from 'react'
import { Link } from 'react-router-dom'




const Post = (props) =>
<>
    <Link className="article" to={"/post/"+props.id}>
        <h2>{ props.title }</h2>
        <p>
            { props.description }
        </p>
        <h4>Show Comments</h4>
    </Link>

</>

export default Post
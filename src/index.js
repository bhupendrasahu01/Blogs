import React from 'react'
import ReactDom from 'react-dom'
import Routes from './Routes'
import './Includes/style.css'
// import 'bootstrap/dist/css/bootstrap.css';
// Put any other imports below so that CSS from your
// components takes precedence over default styles.

ReactDom.render(<Routes/>, document.getElementById('root'))
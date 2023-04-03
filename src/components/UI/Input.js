import React from 'react'

import classes from './Input.module.css'

const Input = React.forwardRef((props, ref) => { //As ref doesn't work in a custom component that created by the developer, we use forwardrefs in order to reach the ref where it is used.
  return (
    <div className={classes.input}>
      <label htmlFor={props.input.id}>{props.label}</label>
      <input {...props.input} ref={ref}/> {/* ...props.input ensures that all key value pairs we recieve on props input are added (including props.input.id) as props to input */}
    </div>
  )
});

export default Input


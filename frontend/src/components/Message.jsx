import React from 'react'
import {Alert} from "react-bootstrap"

// varient it is the color
// children is the text content of the message

const Message = ({ variant, children }) => {
    return <Alert variant={variant}>{children}</Alert>
  }
  
  // default color varient props
  Message.defaultProps = {
    variant: 'info',
  }
  
  export default Message
  

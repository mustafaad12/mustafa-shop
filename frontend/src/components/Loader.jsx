import React from 'react'
import {Spinner} from "react-bootstrap"

const Loader = () => {
    const style = {
        margin: "auto",
        width: "100px",
        height: "100px",
        display: "block"

    }
  return (
    <Spinner animation="border" role="status" style={style}>
        <span className="visually-hidden">Loading...</span>
    </Spinner>
  )
}

export default Loader
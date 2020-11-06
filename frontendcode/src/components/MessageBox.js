import React from 'react'

export default function MessageBox(props) {
    // const ccc = props.variant;
    // console.log(ccc)
    return (
        <div className={`alert alert-${props.variant || 'info'}`}>
            {props.children}
        </div>
    )
}

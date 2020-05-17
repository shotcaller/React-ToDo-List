import React from 'react'

export default function InputItem(props) {
    return (
        <div>
            <input className='.input-field' type='text' value={props.emptyInput.name} placeholder='Enter field...' onChange={(e) => props.handleChange(e)}></input>
            <button onClick= {()=> props.addToList()} >ADD</button>
        </div>
    )
}

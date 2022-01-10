import React from 'react';

const Dropdown = (props) => {

    return (
        <div>
            <select onChange={props.handleOnChange}>
                {props.breeds.map(item => <option key={item.id} value={item.id}>{item.name}</option>)}
            </select>
            <br/><br/>
        </div>
    )
}

export default Dropdown;
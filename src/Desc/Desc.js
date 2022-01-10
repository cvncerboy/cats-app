import React from 'react';

const Desc = (props) => {
    return (
        <ul>
            {props.cats.map(item => <li key={item.id}>{item.breeds[0].description}</li>)}
        </ul>
    )
}

export default Desc
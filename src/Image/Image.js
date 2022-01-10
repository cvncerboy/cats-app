import React from 'react';

const Image = (props) => {
    return (
        <div>
            <img src={props.cats.map(item => item.url)} alt="cat" width="450px" height="450px"/>
        </div>
    )
}

export default Image
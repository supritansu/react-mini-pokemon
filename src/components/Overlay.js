import React from 'react';

const Overlay1 = ({ newdata1 }) => {
    console.log("we are here");
    const newd = newdata1.base_stat; // Access the property directly, assuming it's a number
    console.log(newd);

    return (
        <div>
            Overlay
            <h1>{newd}</h1>
        </div>
    );
}
export default Overlay1;
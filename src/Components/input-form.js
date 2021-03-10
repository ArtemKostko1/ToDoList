import React from 'react';

const InputFormComponent = () => {
    return (
        <div className="input-form">
            <div className="input-group my-3">
                <input type="text" className="form-control" placeholder="Enter a note" aria-label="Enter a note" aria-describedby="button-addon2"/>
                <button className="btn btn-outline-primary" type="button" id="button-addon2">Add</button>
            </div>
        </div>
    );
};

export default InputFormComponent;
import React, { useState, useEffect } from 'react';

const FormGroup = (props) => {
    const {data, name, label, type} = props
    const [value, setValue] = useState('')

    useEffect(()=>{
        const InitialValue = data && data[name] ? data[name] : undefined
        if(InitialValue !== undefined) setValue(InitialValue)
    }, [name, data]);

    const HandleChange = (e) => {
        if(value === e.target.value) return;

        setValue(e.target.value)
    };


    return(
        <div className="form-group">
        <label>{label}</label>
        <input type={type} className="form-control" value={value} onChange={HandleChange}/>
    </div>

    );
};

export default FormGroup;
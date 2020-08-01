import React, { useState, useEffect } from 'react';

const FormCheckBox= (props) => {
    const {data, name, label } = props
    const [isChecked, setisChecked] = useState(null)

    useEffect(()=>{
        const InitialValue = data && data[name] ? data[name] : undefined
        if(InitialValue !== undefined) setisChecked(!!InitialValue)
    }, [name, data]);

    const HandleChange = (e) => {
        if(isChecked === e.target.checked) return;

        setisChecked(!!e.target.checked)
    };


    return(
        <div className="form-group form-check">
        <label className="form-check-label">
            <input type="checkbox" name="isSocial" checked={!!isChecked} onChange={HandleChange}/>
            <span className="form-check-sign"></span>
            {label}
        </label>
    </div>

    );
};

export default FormCheckBox;
import React from 'react';

const ErroMessage = (props) => {
    return (
            <div className="erroContainer">
                {props.textMessage}
            </div>
    )

}

export default ErroMessage;
import React from 'react'

const Button = ({ text }) => {
    return (
        <div className="button">
            <span className="btn btn-left-top">
            </span>
            <span className="btn-center">
                {text}
            </span>
            <span className="btn btn-bottom">
            </span>
        </div>
    )
}

export default Button

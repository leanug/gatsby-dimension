import React from 'react'

const Close = (props) => {
    return (
        <svg 
            width={ 35 } 
            height={ 35 } 
            viewBox="0 0 21 21"
            xmlns="http://www.w3.org/2000/svg" 
            {...props}
        >
            <g
                fill="none"
                fillRule="evenodd"
                stroke="currentColor"
                strokeLinecap="round"
                strokeLinejoin="round"
            >
                <path d="M15.5 15.5l-10-10zM15.5 5.5l-10 10" />
            </g>
        </svg>
    )
}

export default Close

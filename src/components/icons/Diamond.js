import React from 'react'

const Diamond = props => (
    <svg width={ 40 } height={ 40 } viewBox="0 0 21 21" xmlns="http://www.w3.org/2000/svg" { ...props }>
        <g
            fill="none"
            fillRule="evenodd"
            stroke="currentColor"
            strokeLinecap="round"
            strokeLinejoin="round"
        >
            <path d="M15.5 4l3 4-8 10-8-10 3.009-4zM2.5 8h16M7.5 8l3 10M13.5 8l-3 10" />
            <path d="M5.509 4L7.5 8l3-4 3 4 2-4" />
        </g>
    </svg>
)

export default Diamond

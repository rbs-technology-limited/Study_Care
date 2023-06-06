import * as React from "react"
const ArrowLeft = ({ color }) => (
    <svg
        xmlns="http://www.w3.org/2000/svg"
        width={24}
        height={24}
        fill="none"
    >
        <path
            stroke={color}
            strokeLinecap="round"
            strokeLinejoin="round"
            strokeMiterlimit={10}
            strokeWidth={1.5}
            d="M13.09 4.08 6.57 10.6c-.77.77-.77 2.03 0 2.8l6.52 6.52"
        />
    </svg>
)
export default ArrowLeft

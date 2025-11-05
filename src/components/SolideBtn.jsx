import React from 'react'
import { FiArrowUpRight } from "react-icons/fi";

const SolideBtn = ({ children, className = "", ...props }) => {
  return (
    <button 
      {...props}
      className={`btn_solid ${className}`}
    >
      {children && <span>{children}</span>}
      <FiArrowUpRight className='max-w-md mx-1'/>
    </button>
  )
}

export default SolideBtn;


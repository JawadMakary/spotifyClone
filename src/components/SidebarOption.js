import React from 'react'
import './styles/SidebarOption.css'
const SidebarOption = ({title,Icon}) => {
    return (
        <div className='sidebarOption'>
       
      {Icon && 
      <div className="sidebarOptionIconContainer">
 <Icon className="sidebarOption_icon" />
      </div>
}
     
      {Icon ? <h4>{title}</h4> : <p>{title}</p>}
            
        </div>
    )
}

export default SidebarOption

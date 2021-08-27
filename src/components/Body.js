import React from 'react'
import Header from '../containers/Header'
import './styles/Body.css'
const Body = ({spotify}) => {
    return (
        <div className='body'>
            <Header spotify={spotify} />
        </div>
    )
}

export default Body

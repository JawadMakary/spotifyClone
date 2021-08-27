import React from 'react'
import Header from '../containers/Header'
import { useStateValue } from '../state/StateProvider'
import './styles/Body.css'
const Body = ({spotify}) => {
    const [{discover_weekly},dispatch]=useStateValue()
    console.log('this is our discover weekly--->',discover_weekly)

    return (
        <div className='body'>
            <Header spotify={spotify} />
            <div className="body_info">
                <img src={discover_weekly?.images[0].url} alt="" />
                <div className="body_infoText">
                    <strong style={{textTransform:'uppercase'}}>playlist</strong>
                    <h2>Discover weekly</h2>
                    <p>{discover_weekly?.description}</p>
                </div>
            </div>
        </div>
    )
}

export default Body

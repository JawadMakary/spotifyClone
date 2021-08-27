import React from 'react'
import Header from '../containers/Header'
import { useStateValue } from '../state/StateProvider'
import './styles/Body.css'
import PlayCircleFilledIcon from "@material-ui/icons/PlayCircleFilled";
import FavoriteIcon from "@material-ui/icons/Favorite";
import MoreHorizIcon from "@material-ui/icons/MoreHoriz";
import SongRow from './SongRow';
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
            <div className="body_songs">
                <div className="body_icons">
                <PlayCircleFilledIcon
            className="body_shuffle"
           
          />
          <FavoriteIcon fontSize="large" />
          <MoreHorizIcon />
                </div>
                {/* song list */}
                {discover_weekly?.tracks.items.map((item)=>(
                    <SongRow track={item.track} />
                ))}
            </div>
        </div>
    )
}

export default Body

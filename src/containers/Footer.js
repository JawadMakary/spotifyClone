import React from 'react'
import './styles/Footer.css'
// for the middle div
import PlayCircleOutlineIcon from "@material-ui/icons/PlayCircleOutline";
import SkipPreviousIcon from "@material-ui/icons/SkipPrevious";
import SkipNextIcon from "@material-ui/icons/SkipNext";
import ShuffleIcon from "@material-ui/icons/Shuffle";
import RepeatIcon from "@material-ui/icons/Repeat";


// for the right div
import { Grid, Slider } from "@material-ui/core";
import VolumeDownIcon from "@material-ui/icons/VolumeDown";
import PauseCircleOutlineIcon from "@material-ui/icons/PauseCircleOutline";
import PlaylistPlayIcon from "@material-ui/icons/PlaylistPlay";

const Footer = () => {
    return (
        <div className='footer'>
            <div className="footer_left">
            
                <img className='footer_albumLogo' src="https://th.bing.com/th/id/OIP.QAo_GSLlmnkWN_RJCLeOyAHaHa?pid=ImgDet&rs=1" alt="" />
                <div className="footer_songInfo">
                <h4>song name</h4>
                <p>lorem</p>
            </div>
            </div>
            <div className="footer_center">
            <ShuffleIcon className='footer_green' />
            <SkipPreviousIcon className='footer_icon' />
            <PlayCircleOutlineIcon fontSize='large' className='footer_icon' />
            <SkipNextIcon className='footer_icon' />
            <RepeatIcon className='footer_green' />
            </div>
            <div className="footer_right">
            <Grid container spacing={2}>
          <Grid item>
            <PlaylistPlayIcon />
          </Grid>
          <Grid item>
            <VolumeDownIcon />
          </Grid>
          <Grid item xs>
            <Slider aria-labelledby="continuous-slider" />
          </Grid>
        </Grid>
            </div>
        </div>
    )
}

export default Footer

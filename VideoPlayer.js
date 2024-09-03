import React from 'react'
import './VideoPlayer.css'
import video_1 from '../images/video-1.mp4';

function VideoPlayer() {
  return (
   
    <div className='hero-container'>
     <video src={video_1} autoPlay loop muted controls />

      <h1>SHOP TODAY ON <span style={{color: 'aqua'}}>NIKSHI COUTURE</span></h1>
      <p>We bring you the finest collection of apparel for  Women, Men and Kid Wear</p>

      {/* <div className='hero-btns'>
        <Button
          className='btns'
          buttonStyle='btn--outline'
          buttonSize='btn--large'
        >
          GET STARTED
        </Button>
        <Button
          className='btns'
          buttonStyle='btn--primary'
          buttonSize='btn--large'
          onClick={console.log('hey')}
        >
          WATCH TRAILER <i className='far fa-play-circle' />
        </Button>
      </div> */}
    </div>
  )
}

export default VideoPlayer
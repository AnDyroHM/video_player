import React, { Component } from 'react';
import '../../css/index.css';
import '../../css/App.css';
import isEmpty from 'lodash/isEmpty'
class App extends Component {

  constructor(props) {
    super(props);
    this.state = {
      videos: {
        'sd': 'https://storage.googleapis.com/kovle/public/videos/video_21.mp4',
        'hd': 'https://storage.googleapis.com/kovle/public/videos/video2.mp4'
      },
      currentQ: '',
      currentTime: 0
    }
  }

  componentDidMount = () => {
    let q_player = localStorage.getItem("q_player")
    this.changeQ(q_player)
  }

  changeQ = (q_player) => {
    this.setState({
      currentQ: isEmpty(q_player) ? 'sd' : q_player
    }, () => {
      this.loadVideo(this.state.currentQ)
    })
  }

  loadVideo = (quality) => {
    var video = document.getElementsByClassName('kovle_video');
    var mp4 = document.getElementById('mp4');
    mp4.src = this.state.videos[quality]
    // video.load();
    // console.log(video)

  }
  handleChangeQ = (e) => {
    let new_video_q = e.target.dataset.change;
    this.loadVideo(new_video_q)
    var video = document.getElementsByClassName('kovle_video');
    video[0].load();
    video[0].currentTime = this.state.currentTime
    video[0].play();

  }
  handleDuration = (e) => {
    this.setState({
      currentTime: e.target.currentTime
    })
  }
  render() {

    return (
      <div className="main_app">
        <video className='kovle_video' poster='https://storage.googleapis.com/kovle/public/videos/banner.png' controls preload="none" onTimeUpdate={(e) => this.handleDuration(e)}>
          <source src="" type='video/mp4' id="mp4" />
        </video>

        <div className='change_q' >
          <div className='option_q' data-change='sd' onClick={(e) => this.handleChangeQ(e)}>SD</div>
          <div className='option_q' data-change='hd' onClick={(e) => this.handleChangeQ(e)}>HD</div>
        </div>

        {
          this.state.currentQ ? this.state.currentQ : 'Default Q'
        }

      </div>
    );
  }
}

export default App;

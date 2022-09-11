import { Element, State, Component, h, Prop } from '@stencil/core';

@Component({
tag: 'mv-video',
styleUrl: 'mv-video.scss'
})

export class MvVideo {

@Prop() account: string;
@Prop() width: string;
@Prop() height: string;
@Prop() alias: string;

@Element() videoEl: HTMLElement;

@State() fullVideo: string;
@State() preview: string;
@State() poster: string;
@State() played: boolean = false;

componentDidLoad() {
this.fullVideo = `http://res.cloudinary.com/unicodeveloper/video/upload/f_webm,q_auto:low,e_fade:2000/e_fade:-4000/cartoon.mp4`;
this.preview = '/assets/video/cartoonPrev.mp4';
this.poster = '/assets/video/cartoon.jpg';
}


play() {
this.played =true;
// Hide the preview
// this.hidePreview();
// Set the full video element src
this.videoEl.querySelector('#fullVideo').setAttribute('src', this.fullVideo);

// Set the state to "playing" for showPreview and hidePreview checks
this.videoEl.setAttribute('state', 'playing');

// set the svg play button to disappear
this.videoEl.querySelector('svg').style.display = 'none';

}

showPreview() {
  this.played = false;

//If the full video is loaded and playing, ignore this event
if(this.videoEl.getAttribute('state') === 'playing') {
return;
}

// Update state for CSS / component's child element visibility
this.videoEl.setAttribute('state', 'preview');

// set the preview video to the src attribute of the video tag
this.videoEl.querySelector('#previewVideo').setAttribute('src', this.preview);

}

hidePreview() {
// If the full video is loaded and playing, ignore this event
if(this.videoEl.getAttribute('state') === 'playing') {
return;
}
// Update state for CSS / component's child element visibility
this.videoEl.setAttribute('state', '');

// Set the video to go to the beginning
this.videoEl.querySelector('video').currentTime = 0;

// ..then pause the video
this.videoEl.querySelector('video').pause();
}

render() {
return (
<div onMouseEnter={this.showPreview.bind(this)} onMouseLeave={this.hidePreview.bind(this)} class="mv-video-item">
  {/* <div id="divpreviewVideo" class="mv-video-item-video">
    <video id="previewVideo" poster={this.poster} autoplay loop width={this.width} height={this.height}></video>
  </div> */}
  <div class="mv-video-item-video">
      {this.played == true
          ? <video id="fullVideo" autoplay controls></video>
          : <video id="previewVideo" poster={this.poster} autoplay loop></video>
      }
  </div>
  <svg class="mv-video-btn" onClick={this.play.bind(this)} xmlns="http://www.w3.org/2000/svg" id="play-icon" version="1.1" height="50"
    width="50" viewBox="0 0 1200 1200">
    <path
      d="M 600,1200 C 268.65,1200 0,931.35 0,600 0,268.65 268.65,0 600,0 c 331.35,0 600,268.65 600,600 0,331.35 -268.65,600 -600,600 z M 450,300.45 450,899.55 900,600 450,300.45 z"
      id="path16995" />
  </svg>
</div>
);
}
}
import { Component } from '@angular/core';
import { YouTubePlayerModule } from '@angular/youtube-player';


@Component({
  selector: 'app-video-player',
  imports: [YouTubePlayerModule],
  templateUrl: './video-player.html',
  styleUrl: './video-player.css',
})

export class VideoPlayer {
  
  configPlayer: YT.PlayerVars = {
  autoplay: 1,
  controls: 0,
  fs:0,
};

}

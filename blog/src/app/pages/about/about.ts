import { Component } from '@angular/core';
import { VideoPlayer } from '../../components/video-player/video-player'
@Component({
  selector: 'app-about',
  imports: [VideoPlayer],
  templateUrl: './about.html',
  styleUrl: './about.css',
})
export class About {}

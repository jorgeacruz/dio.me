import { Component } from '@angular/core';
import { BigcardComponent } from '../../components/bigcard-component/bigcard-component';
import { SmallcardComponent } from '../../components/smallcard-component/smallcard-component';

@Component({
  selector: 'app-home',
  imports: [BigcardComponent, SmallcardComponent],
  templateUrl: './home.html',
  styleUrl: './home.css',
})
export class Home {}

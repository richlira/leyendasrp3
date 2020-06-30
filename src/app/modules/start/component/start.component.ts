import { Component } from '@angular/core';
import { faDiscord, faInstagram } from '@fortawesome/free-brands-svg-icons/';

@Component({
  selector: 'start-component',
  templateUrl: './start.component.html',
  styleUrls: ['./start.component.scss']
})
export class StartComponent  {

  faDiscord = faDiscord;
  faInstagram = faInstagram;


}

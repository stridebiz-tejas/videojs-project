import { Component, OnInit } from '@angular/core';
import { faPhone } from '@fortawesome/free-solid-svg-icons'
import { faEnvelope } from '@fortawesome/free-solid-svg-icons'
import { faGlobe } from '@fortawesome/free-solid-svg-icons'
import { faShareSquare } from '@fortawesome/free-solid-svg-icons'
import { faSave } from '@fortawesome/free-solid-svg-icons'

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.scss']
})
export class HomeComponent implements OnInit {

  faPhone = faPhone;
  faEnvelope = faEnvelope
  faGlobe = faGlobe;
  faShareSquare = faShareSquare;
  faSave = faSave;

  constructor() { }

  ngOnInit(): void {
  }

}

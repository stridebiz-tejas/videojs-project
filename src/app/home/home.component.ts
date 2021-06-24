import { Component, OnInit } from '@angular/core';
import { faPhone } from '@fortawesome/free-solid-svg-icons'
import { faEnvelope } from '@fortawesome/free-solid-svg-icons'
import { faGlobe } from '@fortawesome/free-solid-svg-icons'
import { faShareSquare } from '@fortawesome/free-solid-svg-icons'
import { faSave } from '@fortawesome/free-solid-svg-icons'
import { BsModalRef, BsModalService } from 'ngx-bootstrap/modal';

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
  modalRef!: BsModalRef;
  showVideo = false;

  constructor(
    private modalService: BsModalService
  ) { }

  ngOnInit(): void {
  }

  shareContact(template: any) {
    this.modalRef = this.modalService.show(template, { animated: true, class: 'modal-md modal-dialog-centered', });
  }

  saveContact(template: any) {
    this.modalRef = this.modalService.show(template, { animated: true, class: 'modal-md modal-dialog-centered', });
  }

  viewVideo() {
    this.showVideo = true;
  }

  closeVideo() {
    this.showVideo = false;
  }

}

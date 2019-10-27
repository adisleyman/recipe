import { Component, OnInit ,ViewChild} from '@angular/core';
import { ModalDirective } from 'angular-bootstrap-md';


@Component({
  selector: 'app-show-recepie',
  templateUrl: './show-recepie.component.html',
  styleUrls: ['./show-recepie.component.scss']
})
export class ShowRecepieComponent implements OnInit {

  constructor() { }

  ngOnInit() {
  }

  @ViewChild('basicModal', { static: true }) basicModal: ModalDirective;
  //הוספה למחברת אם הוא מנוי ואם לא הצעה לרישום
eddNotbook(){
  this.basicModal.show();

}

}

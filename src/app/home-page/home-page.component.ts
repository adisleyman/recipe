import { Component, OnInit ,ViewChild} from '@angular/core';
import { Router } from '@angular/router';
import { ModalDirective } from 'angular-bootstrap-md';

@Component({
  selector: 'app-home-page',
  templateUrl: './home-page.component.html',
  styleUrls: ['./home-page.component.scss']
})
export class HomePageComponent implements OnInit {

  // hidden='hidden';
s:string;
constructor(private router: Router) { }

  ngOnInit() {
  }
// modal = document.getElementById('myModal');
// @ViewChild('myModal', {static: false} ) myModal;

// openModel() {
//   this.myModal.nativeElement.className = 'modal fade show';
// }
// closeModel() {
//    this.myModal.nativeElement.className = 'modal hide';
// }
search(){
  let s:string=(String)((<HTMLSelectElement> event.target).value);
  this.router.navigate(['/search-recepie/:',{id:s}]);//להמשיך כאו מהדף של הניווט בין קומפוננטות
}
ToSearch(){
  this.router.navigate(['/search-recepie']);
}


slideIndex = 1;
images: any = ['../assets/images/20181203_123426.jpg',
  '../../assets/images/backgroundd.png',
  '../../assets/images/danit_salomon.png',
  '../../assets/images/filis_gelzer.png',
  '../../assets/images/moshe_segev.png',
  '../../assets/images/danit_salomon.png',
  '../../assets/images/moshe_segev.png',
  '../../assets/images/filis_gelzer.png',
  '../../assets/images/danit_salomon.png'


];
indexesImages = [0, 1, 2, 3, 4];

ngAfterViewInit() {

}
// Next/previous controls
plusSlides(next) {
  if (next) {
    for (let i = 0; i < this.indexesImages.length; i++) {
      this.indexesImages[i] = (this.indexesImages[i] + 5) % this.images.length;
    }
  }
  //prev
  else {
    for (let i = 0; i < this.indexesImages.length; i++) {
      this.indexesImages[i] = (this.indexesImages[i] - 5 + this.images.length) % this.images.length;
    }
  }
}
gotoNotbook(){
  this.router.navigate(['/notebook']);
}


}

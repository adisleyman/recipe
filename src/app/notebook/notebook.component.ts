import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-notebook',
  templateUrl: './notebook.component.html',
  styleUrls: ['./notebook.component.scss']
})
export class NotebookComponent implements OnInit {

  constructor() { }

  ngOnInit() {
  }
  slideIndex = 1;
images: any = ['../assets/images/20181203_123426.jpg',
  '../../assets/images/20181203_212611.jpg',
  '../../assets/images/20181203_220101.jpg',
  '../../assets/images/20181203_125138.jpg',
  '../../assets/images/20181203_165901.jpg',
  '../../assets/images/20181203_170838.jpg',
  '../../assets/images/20181204_082347.jpg',
  '../../assets/images/20181204_082358.jpg',
  '../../assets/images/Parade Floats 009.jpg'


];
// indexesImages = [0, 1, 2, 3, 4];
indexesImages = [0];
ngAfterViewInit() {

}
// Next/previous controls
plusSlides(next) {
  if (next) {
    for (let i = 0; i < 1; i++) {
      this.indexesImages[i] = (this.indexesImages[i] + 1) % this.images.length;
    }
  }
  //prev
  else {
    for (let i = 0; i < 1; i++) {
      this.indexesImages[i] = (this.indexesImages[i] - 1 + this.images.length) % this.images.length;
    }
  }
}
}


 



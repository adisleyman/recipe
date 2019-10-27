import { Component, OnInit, AfterViewInit } from '@angular/core';

@Component({
  selector: 'app-recepie',
  templateUrl: './recepie.component.html',
  styleUrls: ['./recepie.component.scss']
})
export class RecepieComponent implements AfterViewInit {

  slideIndex = 1;
  images: any = ['../assets/images/Parade Floats 001.jpg',
    '../../assets/images/Parade Floats 002.jpg',
    '../../assets/images/Parade Floats 003.jpg',
    '../../assets/images/Parade Floats 004.jpg',
    '../../assets/images/Parade Floats 005.jpg',
    '../../assets/images/Parade Floats 006.jpg',
    '../../assets/images/Parade Floats 007.jpg',
    '../../assets/images/Parade Floats 008.jpg',
    '../../assets/images/Parade Floats 009.jpg'


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

}

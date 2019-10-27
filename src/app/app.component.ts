import { Component, ViewChild } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent {
  title = 'mdb-angular-free';

  
ngAfterViewInit() {

}

// Next/previous controls
// plusSlides(next) {
//   if (next) {
//     for (let i = 0; i < this.indexesImages.length; i++) {
//       this.indexesImages[i] = (this.indexesImages[i] + 5) % this.images.length;
//     }
//   }
//   //prev
//   else {
//     for (let i = 0; i < this.indexesImages.length; i++) {
//       this.indexesImages[i] = (this.indexesImages[i] - 5 + this.images.length) % this.images.length;
//     }
//   }
// }
}

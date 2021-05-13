import { Component, OnInit, Input } from '@angular/core';

@Component({
  selector: 'app-lightbox',
  templateUrl: './lightbox.component.html',
  styleUrls: ['./lightbox.component.css']
})
export class LightboxComponent implements OnInit {
  @Input() imageUrls_1:string ="";
  @Input() imageUrls_2:string ="";
  @Input() imageUrls_3:string ="";
   @Input() productsName:string ="";

  constructor() { }

  slideIndex = 1;
  images = ['../../assets/ghacem-s-s.jpg',
  '../../assets/ghacem-s-e.jpg',
  '../../assets/ghacem-s-r.jpg'

];
  images1 ='../../assets/ghacem-s-s.jpg';
 images2 = '../../assets/ghacem-s-e.jpg';
 images3 = '../../assets/ghacem-s-r.jpg';

image = '../../assets/ghacem-s-s.jpg';
  ngOnInit() {
    this.showSlides(this.slideIndex);
  }
    //=======================================Image Slide============================================
// Next/previous controls
 plusSlides(n) {
  this.showSlides(this.slideIndex += n);
}

// Thumbnail image controls
 currentSlide(n) {
  this.showSlides(this.slideIndex = n);
}

 showSlides(n) 
 {
  var i;
  var slides = document.getElementsByClassName("mySlides") as HTMLCollectionOf<HTMLElement>;
  var dots = document.getElementsByClassName("demo");
  var captionText = document.getElementById("caption");
  if (n > slides.length) {this.slideIndex = 1}
  if (n < 1) {this.slideIndex = slides.length}
  for (i = 0; i < slides.length; i++) {
    slides[i].style.display = "none";
  }
  for (i = 0; i < dots.length; i++) {
    dots[i].className = dots[i].className.replace(" active", "");
  }
  slides[this.slideIndex-1].style.display = "block";
  dots[this.slideIndex-1].className += " active";
  
}
//===============================END OF IMAGE SLIDE========================================

}




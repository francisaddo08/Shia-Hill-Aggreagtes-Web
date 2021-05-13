import { Component, OnInit } from '@angular/core';
import {DomSanitizer, SafeHtml} from '@angular/platform-browser'


@Component({
  selector: 'app-image-lightbox',
  templateUrl: './image-lightbox.component.html',
  styleUrls: ['./image-lightbox.component.css']
})
export class ImageLightboxComponent implements OnInit 
{
  images = ['../../assets/ghacem-s-s.jpg',
    '../../assets/ghacem-s-e.jpg',
    '../../assets/ghacem-s-r.jpg'

  ];
  image = '../../assets/ghacem-s-s.jpg';
  //====================================================================
  startIndex: number = 1;

  imageContent =`<div>
  <p> from image </p>
  <img src="">
  
  </div>`;
  constructor(public sanitizer: DomSanitizer) { }

  ngOnInit() {
    this.showSlides(this.startIndex);
   }
  

  plusSlide(){}
  currentSlide(){

  }
  showSlides(arryIndex){
    var i;
    let imageArray = document.getElementsByClassName("content"); //get all the divs with class name
    console.log(imageArray.length);
    console.log('current index' + this.startIndex);
    if(arryIndex > imageArray.length){this.startIndex = 1}
    console.log('current index   ' + this.startIndex);
    if(arryIndex < 1){ this.startIndex = imageArray.length}
    console.log('current index  ' + this.startIndex);
  

  }


  
}


 /**  Repeat() {
    setTimeout(() => {
      this.__FunctionSlide();
      this.Repeat();
    }, 2000);
  }
  __FunctionSlide() {
    const slides = Array.from(document.getElementsByClassName('mall-show-slide'));
    if (slides === []) {
      this.Repeat();
    }
    for (const x of slides) {
      const y = x as HTMLElement;
      y.style.display = 'none';
    }
    if (this.startIndex > slides.length - 1) {
      this.startIndex = 0;
      const slide = slides[this.startIndex] as HTMLElement;
      slide.style.display = 'block';
      this.startIndex++;
    } else {

      const slide = slides[this.startIndex] as HTMLElement;
      slide.style.display = 'block';
      this.startIndex++;
    }
    
  }
  */









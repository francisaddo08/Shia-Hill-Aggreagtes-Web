import { Component, OnInit, HostBinding, Input } from '@angular/core';
import {trigger, state, style, animate, transition, keyframes} from '@angular/animations'
import { Router } from '@angular/router';
import { DataService } from 'src/app/shared/data.service';
import { from } from 'rxjs';

@Component({
  selector: 'app-related-product',
  templateUrl: './related-product.component.html',
  styleUrls: ['./related-product.component.css'],
  animations: [
     trigger('relatedCard',[
      state('empty', style({
        //transform the current state of the html element
        transform: 'scale(0)'
     })),
      state('visible', style({
        transform: 'scale(1)'
      })),
      transition('empty => visible', animate('500ms' ))
    ])
 

  ]
}
)
export class RelatedProductComponent implements OnInit {
  state:string = 'empty';
  @Input() relatedProduct: any[] = [];

  constructor(public data:DataService, public router:Router) { }

  ngOnInit() {
    setTimeout(() => {
      this.state = 'visible';
    }, 500);
    
  
  }

}

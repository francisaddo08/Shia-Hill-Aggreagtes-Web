import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { DataService } from 'src/app/shared/data.service';

@Component({
  selector: 'main-banner',
  templateUrl: './banner.component.html',
  styleUrls: ['./banner.component.css']
})
export class BannerComponent implements OnInit {

  constructor(public data:DataService , public router: Router) { }
   
  ngOnInit() {
    
  }
  gotoHomePage(){
   return this.router.navigate(['/']);
}


}
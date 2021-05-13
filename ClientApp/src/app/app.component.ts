import { Component } from '@angular/core';
import { RouterOutlet } from '@angular/router';
import {fader, slider} from '../app/shared/generalAnimation';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  animations: [slider ]
})
export class AppComponent {
  title = 'app';
  
  prepareRoute(outlet: RouterOutlet){
    return outlet && outlet.activatedRouteData && outlet.activatedRouteData['animation'];

  }
  
  
  onActivate(event){
    let scrollToTop = window.setInterval(()=>{
      let pos = window.pageYOffset;
      if(pos >0){
        window.scrollTo(0,pos-20); //how far to scroll on each step
      }else{
        window.clearInterval(scrollToTop);
      }
    }, 16);
  }
}

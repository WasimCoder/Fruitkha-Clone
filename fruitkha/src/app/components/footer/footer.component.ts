import { Component } from '@angular/core';
import { Router } from '@angular/router';

@Component({
  selector: 'app-footer',
  templateUrl: './footer.component.html',
  styleUrls: ['./footer.component.css']
})
export class FooterComponent {
  constructor(private route: Router){}
  about(){
    this.route.navigate(['/about'])
  }
  home(){
    this.route.navigate(['/home'])
  }
  top(){
  }
  news(){
    this.route.navigate(['/news'])
  }
  contact(){
    this.route.navigate(['/contact'])
  }
  cart(){
    this.route.navigate(['/cart'])
  }
}

import { Component, OnInit, HostListener } from '@angular/core';
import { Router } from '@angular/router';

@Component({
  selector: 'app-header',
  templateUrl: './header.component.html',
  styleUrls: ['./header.component.css']
})
export class HeaderComponent implements OnInit{
  constructor(private route: Router){}
  ngOnInit():void{
  } 

  public header_variable:boolean = false;
  @HostListener('document:scroll') onScroll(){
    if(document.body.scrollTop>5 || document.documentElement.scrollTop>5){
      this.header_variable = true;
    }
    else{
      this.header_variable = false;
    }
  }
  about(){
    this.route.navigate(['/about'])
  }
  home(){
    this.route.navigate(['/home'])
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

import { Component, OnInit, HostListener } from '@angular/core';

@Component({
  selector: 'app-header',
  templateUrl: './header.component.html',
  styleUrls: ['./header.component.css']
})
export class HeaderComponent implements OnInit{
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
}

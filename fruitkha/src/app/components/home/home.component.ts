import { Component, ElementRef, OnInit } from '@angular/core';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.css']
})
export class HomeComponent implements OnInit{
  constructor(private eref: ElementRef){}
  public loaded:boolean = false;
  ngOnInit(){
    setTimeout(() => {
      this.loaded=true;
    }, 1000);
  }
content = [{
  image:'/assets/images/review1.png',
  name: 'itachi',
  work: 'software Developer',
  content: 'Hello i am itachi and i am a software developer'

},{
  image:'/assets/images/review2.png',
  name: 'sasori',
  work: 'Model Designer',
  content: 'Hello i am sasori and i am a Model Designer'
},{
  image:'/assets/images/review3.png',
  name: 'kisame',
  work: 'Marine Architect',
  content: 'Hello i am kisame and i am a Marine Architect'
},
]
logoContent =[ 
  {img:"/assets/images/logo1.png",src:"logos"} ,
  {img:"/assets/images/logo2.png",src:"logos"} ,
  {img:"/assets/images/logo3.png",src:"logos"} ,
  {img:"/assets/images/logo4.png",src:"logos"} , 
  {img:"/assets/images/logo5.png",src:"logos"}  
]
}

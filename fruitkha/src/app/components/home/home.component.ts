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
  name: 'Michael',
  work: 'software Developer',
  content: 'Hello i am Michael and i am a software developer'

},{
  image:'/assets/images/review2.png',
  name: 'Sally',
  work: 'Model Designer',
  content: 'Hello i am Sally and i am a Model Designer'
},{
  image:'/assets/images/review3.png',
  name: 'Peter',
  work: 'Marine Architect',
  content: 'Hello i am Peter and i am a Marine Architect'
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

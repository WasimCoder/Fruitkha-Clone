import { Component } from '@angular/core';

@Component({
  selector: 'app-tabnews',
  templateUrl: './tabnews.component.html',
  styleUrls: ['./tabnews.component.css']
})
export class TabnewsComponent {
  logoContent =[ 
    {img:"/assets/images/logo1.png",src:"logos"} ,
    {img:"/assets/images/logo2.png",src:"logos"} ,
    {img:"/assets/images/logo3.png",src:"logos"} ,
    {img:"/assets/images/logo4.png",src:"logos"} , 
    {img:"/assets/images/logo5.png",src:"logos"}  
  ]
}

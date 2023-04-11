import { Component, Input } from '@angular/core';
interface logoBox{
img: string,
src: string
}
@Component({
  selector: 'app-logo',
  templateUrl: './logo.component.html',
  styleUrls: ['./logo.component.css']
})
export class LogoComponent {
  @Input() logoContent: logoBox[] = [];
}

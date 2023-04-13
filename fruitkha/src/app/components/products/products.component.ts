import { Component } from '@angular/core';
interface productList{
  prodImage: string;
  prodName: string;
  prodPrice:string
}
@Component({
  selector: 'app-products',
  templateUrl: './products.component.html',
  styleUrls: ['./products.component.css']
})
export class ProductsComponent {
productList: productList[] = [
{
  prodImage: '/assets/images/strawberry.jpg',
  prodName: 'Strawberry',
  prodPrice: '70$',
},
{
  prodImage: '/assets/images/grapes.jpg',
  prodName: 'Grapes',
  prodPrice: '50$',
},
{
  prodImage: '/assets/images/lemon.jpg',
  prodName: 'Lemon',
  prodPrice: '60$',
},
]
}

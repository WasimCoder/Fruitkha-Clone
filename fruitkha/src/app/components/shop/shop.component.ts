import { NgFor } from '@angular/common';
import { Component, EventEmitter, Output } from '@angular/core';
interface productList{
  prodImage: string;
  prodName: string;
  prodPrice:string
}
@Component({
  selector: 'app-shop',
  templateUrl: './shop.component.html',
  styleUrls: ['./shop.component.css']
})
export class ShopComponent {
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
    {
      prodImage: '/assets/images/kiwi.jpg',
      prodName: 'kiwi',
      prodPrice: '80$',
    },
    {
      prodImage: '/assets/images/apple.jpg',
      prodName: 'Green Apple',
      prodPrice: '60$',
    },
    {
      prodImage: '/assets/images/raspberry.jpg',
      prodName: 'Raspberry',
      prodPrice: '60$',
    },
    ]
    searchText: string = '';
    onSearchTextEntered(searchValue: string){
      this.searchText = searchValue;
      console.log(this.searchText)
    }
}

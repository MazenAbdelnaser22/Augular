import { Component } from '@angular/core';
import { ProductsService } from '../products.service';
import { Post } from '../post';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.css']
})
export class HomeComponent {
  items:string[] = ['angular', 'react', 'vue', 'svelte'];
  condition:number = 0 ;
  isActive:boolean = true;
  Posts :Post[] = [];
  constructor(private _productsService : ProductsService) {
    // this.arr = _productsService.items;
    this._productsService.getProducts().subscribe({

     next:(data) => this.Posts = data,
     error:(error) => console.log(error),
     complete:() => console.log('completed')
    });
   }
}

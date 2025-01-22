import { Component } from '@angular/core';
import { ProductsService } from '../products.service';

@Component({
  selector: 'app-blog',
  templateUrl: './blog.component.html',
  styleUrls: ['./blog.component.css']
})
export class BlogComponent {
  // arr: string[]=[];
  // constructor(_productsService : ProductsService) {
  //   this.arr = _productsService.items;
  //  }
   arr:string[] = [];
   constructor(_productsService : ProductsService) {
     this.arr = _productsService.items;
    }
}

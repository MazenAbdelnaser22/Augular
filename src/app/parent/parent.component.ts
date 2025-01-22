import { Component } from '@angular/core';
import { ProductsService } from '../products.service';
import { Post } from '../post';

@Component({
  selector: 'app-parent',
  templateUrl: './parent.component.html',
  styleUrls: ['./parent.component.css']
})
export class ParentComponent {
  test: string = "Hello from child";
  display(msg: string) {
     console.log(msg);
  }
    Posts:Post[] = [];
    constructor(private _prodService: ProductsService) {
      this._prodService.getProducts().subscribe({
        next: (data) => this.Posts = data,
        error: (error) => console.log(error),
        complete: () => console.log('completed')
      });
      // let prodService = new ProductsService();
      // this.arr = prodService.items;
      // this.arr.push("Product4");
     }
}

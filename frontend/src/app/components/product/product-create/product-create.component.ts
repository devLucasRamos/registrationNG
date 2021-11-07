import { ProductService } from './../product.service';
import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { Product } from '../product.model';

@Component({
  selector: 'app-product-create',
  templateUrl: './product-create.component.html',
  styleUrls: ['./product-create.component.css']
})
export class ProductCreateComponent implements OnInit {

  product: Product={
    name: 'Product Default',
    price: 404.00
  }
  constructor(private productService: ProductService,
    private router: Router) { }

  ngOnInit(): void {
    
  }
  createProduct(): void{
    this.productService.create(this.product).subscribe(() =>{
    this.productService.showMessage('Operation executed successfully...')
    this.router.navigate(['/products'])
  })
  }

  cancel(): void{
    this.router.navigate(['/products'])
  }
}

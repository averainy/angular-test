import { Component, OnInit } from '@angular/core';
import { CartService } from '../cart.service';

@Component({
  selector: 'app-cart',
  templateUrl: './cart.component.html',
  styleUrls: ['./cart.component.css']
})
export class CartComponent implements OnInit {

  items = this.cartService.getItems();
  constructor(private cartService: CartService) { }

  ngOnInit(): void {
  }
  clearCart():void{
    this.cartService.clearCart();
    this.items = this.cartService.getItems();
    window.alert('clear cart');
  }

}

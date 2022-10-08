import { Component, OnInit } from '@angular/core';
import { FormBuilder } from '@angular/forms';
import { CartService } from '../cart.service';

@Component({
  selector: 'app-cart',
  templateUrl: './cart.component.html',
  styleUrls: ['./cart.component.css']
})
export class CartComponent implements OnInit {

  items = this.cartService.getItems();
  checkoutForm = this.formBuilder.group({
    name: '',
    address: ''
  });

  constructor(
    private cartService: CartService,
    private formBuilder: FormBuilder,) { }

  ngOnInit(): void {
  }
  clearCart():void{
    this.cartService.clearCart();
    this.items = this.cartService.getItems();
    window.alert('clear cart');
  }
  onSubmit(): void {
    // Process checkout data here
    this.items = this.cartService.clearCart();
    console.warn('Your order has been submitted', this.checkoutForm.value);
    let userName = this.checkoutForm.controls['name'].value;
    console.warn('abcd', userName);
    this.checkoutForm.reset();
  }

}

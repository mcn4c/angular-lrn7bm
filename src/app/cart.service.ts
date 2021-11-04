import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';

//import Product interface from products.ts
import { Product } from "./products"

@Injectable({
  providedIn: 'root'
})
export class CartService {

  //define an items property to store the array of current products in the cart
  items: Product[] = [];

  //Define methods to add items to the cart, return cart items, and clear the cart items

  addToCart(product: Product) {
    this.items.push(product)
  }

  getItems() {
    return this.items;
  }

  clearCart() {
    this.items = [];
    return this.items;
  }
  getShippingPrices() {
    return this.http.get<{type: string, price: number}[]>
    ('/assets/shipping.json')
  }
  constructor(private http: HttpClient) { }
}

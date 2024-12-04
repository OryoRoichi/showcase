import { Injectable } from "@angular/core";
import { Product } from "../types/product.interface";
import { Observable, of } from "rxjs";

@Injectable(
   {
    providedIn: 'root',
   } 
)
export class ShowcaseService{
    products: Product[] = [
        {
            id: 1,
            name: 'Гитара', 
            price: '250BYN',
            description: 'фендер'
        },
          {
            id: 2,
            name: 'Гитара1', 
            price: '250BYN',
            description: 'фендер'
          },
          {
            id: 3,
            name: 'Гитара2', 
            price: '250BYN',
            description: 'фендер'
          },
          {
            id: 4,
            name: 'Гитара2', 
            price: '250BYN',
            description: 'фендер'
          },
          {
            id: 5,
            name: 'Гитара2', 
            price: '250BYN',
            description: 'фендер'
          },
          {
            id: 6,
            name: 'Гитара2', 
            price: '250BYN',
            description: 'фендер'
          },

    ]

    getAll(): Observable<Product[]>{
        return of(this.products);
    }
   
} 
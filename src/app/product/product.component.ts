import { Component, Inject, Input, input } from '@angular/core';
import { Product } from '../types/product.interface';
import { TuiPush } from '@taiga-ui/kit';
import { Observable } from 'rxjs';
import { ShowcaseService } from '../services/showcase.service';
import { AsyncPipe, CommonModule, NgFor } from '@angular/common';


@Component({
  selector: 'app-product',
  standalone: true,
  imports: [
    TuiPush,
    NgFor,
    CommonModule,
    AsyncPipe,
  ],
  templateUrl: './product.component.html',
  styleUrl: './product.component.scss'
})
export class ProductComponent {
  @Input() id: number = 0;

  @Input() name: string = '';

  @Input() price: string = '';

  @Input() description: string = '';


  myLittleHero= "нуну";



  values$: Observable<Product[]> ;

  constructor(
   @Inject(ShowcaseService) readonly dataService: ShowcaseService,
  ){
    this.values$ = this.dataService.getAll()
  }
  
  
  ngOnInit() {

  }
  
}

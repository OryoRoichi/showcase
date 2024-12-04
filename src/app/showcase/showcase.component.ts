import { Component, Inject, OnInit } from '@angular/core';
import { ShowcaseService } from '../services/showcase.service';
import { Observable } from 'rxjs';
import { Product } from '../types/product.interface';
import { ProductComponent } from '../product/product.component';
import { AsyncPipe, CommonModule, NgFor } from '@angular/common';
import { NavBarComponent } from '../nav-bar/nav-bar.component';

@Component({
  selector: 'app-showcase',
  standalone: true,
  imports: [
    ProductComponent,
    NavBarComponent
  ],
  templateUrl: './showcase.component.html',
  styleUrl: './showcase.component.scss'
})
export class ShowcaseComponent  {
  
}

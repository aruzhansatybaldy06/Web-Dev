import { Component } from '@angular/core';
import { ProductCategory, productCategories } from '../productCategories';

@Component({
  selector: 'app-category',
  templateUrl: './category.component.html',
  styleUrls: ['./category.component.css']
})
export class CategoryComponent {
  categories = productCategories;
  currentCategory : string | undefined;

  selectCategory(categoryName: string) {
    this.currentCategory = categoryName;
  }
}

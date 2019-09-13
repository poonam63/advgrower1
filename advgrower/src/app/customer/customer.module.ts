import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { WishlistlistComponent } from './components/wishlistlist/wishlistlist.component';
import { MatTableModule } from '@angular/material/table';
import { MatPaginatorModule } from '@angular/material/paginator';
import { MatSortModule } from '@angular/material/sort';



@NgModule({
  declarations: [WishlistlistComponent],
  imports: [
    CommonModule,
    MatTableModule,
    MatPaginatorModule,
    MatSortModule
  ]
})
export class CustomerModule { }

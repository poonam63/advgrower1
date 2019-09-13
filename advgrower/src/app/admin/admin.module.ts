import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { AddProductComponent } from './components/add-product/add-product.component';
import { AddcustomerComponent } from './components/addcustomer/addcustomer.component';
import { MatInputModule } from '@angular/material/input';
import { MatButtonModule } from '@angular/material/button';
import { MatSelectModule } from '@angular/material/select';
import { MatRadioModule } from '@angular/material/radio';
import { MatCardModule } from '@angular/material/card';
import { ReactiveFormsModule } from '@angular/forms';
import { AddproductComponent } from './components/addproduct/addproduct.component';
import { AddusersComponent } from './components/addusers/addusers.component';
import { CustomerlistComponent } from './components/customerlist/customerlist.component';
import { MatTableModule } from '@angular/material/table';
import { MatPaginatorModule } from '@angular/material/paginator';
import { MatSortModule } from '@angular/material/sort';
import { UserslistComponent } from './components/userslist/userslist.component';
import { OrderslistComponent } from './components/orderslist/orderslist.component';



@NgModule({
  declarations: [AddProductComponent, AddcustomerComponent, AddproductComponent, AddusersComponent, CustomerlistComponent, UserslistComponent, OrderslistComponent],
  imports: [
    CommonModule,
    MatInputModule,
    MatButtonModule,
    MatSelectModule,
    MatRadioModule,
    MatCardModule,
    ReactiveFormsModule,
    MatTableModule,
    MatPaginatorModule,
    MatSortModule
  ]
})
export class AdminModule { }

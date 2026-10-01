import { CommonModule } from '@angular/common';
import { Component } from '@angular/core';
import { Form, FormGroupDirective, FormsModule } from '@angular/forms';

@Component({
  selector: 'app-menu-items',
  imports: [CommonModule,FormsModule],
  templateUrl: './menu-items.component.html',
  styleUrl: './menu-items.component.css',
})
export class MenuItemsComponent {
  menuForm!:FormGroupDirective
  
  constructor(){
    
  }

}

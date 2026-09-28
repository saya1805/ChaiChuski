import { Component, effect, inject } from '@angular/core';
import { ApiService } from '../Services/api.service';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

@Component({
  selector: 'app-dashboard',
  imports: [CommonModule, FormsModule],
  templateUrl: './dashboard.component.html',
  styleUrl: './dashboard.component.css',
})
export class DashboardComponent {
  private commnservice = inject(ApiService)

  Foptions:any[] = [
    { name: 'Chai & Coffee', icon: '☕' },
    { name: 'Snacks', icon: '🍞' },
    { name: 'Cold Drinks', icon: '🥤' }
  ]

  constructor(){
    this.commnservice.getusersall()
    effect(() => {
      console.log("add     ")
    })
  }


}

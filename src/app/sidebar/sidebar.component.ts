import { CommonModule } from '@angular/common';
import { Component, input, model, signal } from '@angular/core';
import { RouterLink, RouterLinkActive } from '@angular/router';

@Component({
  selector: 'app-sidebar',
  imports: [CommonModule,RouterLink, RouterLinkActive],
  templateUrl: './sidebar.component.html',
  styleUrl: './sidebar.component.css',
})
export class SidebarComponent {
isClosed = model<boolean>(false);

  toggleSidebar(): void {
    this.isClosed.update(state => !state);
  }
}

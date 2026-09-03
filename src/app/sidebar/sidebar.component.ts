import { CommonModule } from '@angular/common';
import { Component, input, model, signal } from '@angular/core';

@Component({
  selector: 'app-sidebar',
  imports: [CommonModule],
  templateUrl: './sidebar.component.html',
  styleUrl: './sidebar.component.css',
})
export class SidebarComponent {
isClosed = model<boolean>(false);

  toggleSidebar(): void {
    this.isClosed.update(state => !state);
  }
}

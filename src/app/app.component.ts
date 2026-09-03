import { Component, inject, signal } from '@angular/core';
import { NavigationEnd, Router, RouterOutlet } from '@angular/router';
import { SidebarComponent } from './sidebar/sidebar.component';
import { CommonModule } from '@angular/common';
import { filter } from 'rxjs';

@Component({
    selector: 'app-root',
    imports: [RouterOutlet,SidebarComponent,CommonModule],
    templateUrl: './app.component.html',
    styleUrl: './app.component.css'
})
export class AppComponent {
  private router = inject(Router)

  CurrentNavigation = signal('')
  title = 'chaiK';

  isSidebarClosed = signal<boolean>(false);

  constructor(){
 this.router.events.pipe(filter(event => event instanceof NavigationEnd)).subscribe((event:any) =>
    {
      this.CurrentNavigation.set(event.urlAfterRedirects)
    })
  }

  toggleSidebar(): void {
    this.isSidebarClosed.update(state => !state);
   
  }
}

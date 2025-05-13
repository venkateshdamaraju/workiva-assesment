import { Component } from '@angular/core';
import { RouterOutlet, RouterModule } from '@angular/router'; // ✅ Add RouterModule

@Component({
  selector: 'app-root',
  standalone: true,
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css'],
  imports: [
    RouterOutlet,
    RouterModule
  ]
})
export class AppComponent {}
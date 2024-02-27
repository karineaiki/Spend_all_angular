import { Component } from '@angular/core';
import { RouterOutlet } from '@angular/router';
import { BodyComponent } from './body/body.component';
import { HeaderComponent } from './header/header.component';

@Component({
  selector: 'app-root',
  standalone: true,
  imports: [
    HeaderComponent,
    BodyComponent,
  ],
  template: `
  <main>
    <section class="content">
      <app-header></app-header>
      <app-body></app-body>
    </section>
  </main>
`,
  styleUrl: './app.component.css'
})
export class AppComponent {
  title = 'spend_all angular';
}

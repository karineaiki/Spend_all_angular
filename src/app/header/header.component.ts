import { Component } from '@angular/core';

@Component({
  selector: 'app-header',
  standalone: true,
  imports: [],
  template: `
    <section>
      <!-- <img src="assets/images/logo.png", alt="Logo Angular"/> -->
      <h1>Les fonctionnalités d'Angular pour une application de banque en ligne</h1>
    </section>
  `,
  styleUrl: './header.component.css'
})
export class HeaderComponent {

}

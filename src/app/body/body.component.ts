import { Component } from '@angular/core';

@Component({
  selector: 'app-body',
  standalone: true,
  imports: [],
  template: `
  <section>
      <h2>Les atouts</h2>
        <p>
        Angular est un framework JavaScript développé par Google, est un excellent choix pour créer une application de banque en ligne. 
        </p>
        <h3>L'uniformité</h3>
          <p>Ce n'est pas un hasard si les frameworks les plus en vogue et les plus performants en 2024 sont notamment Angular, React et vue.js.
          <br>La clé la stabilité des projets dans le domaine du développement réside dans la capacité d'uniformisation des outils. Plus le choix de la framework s'oriente vers les plus populaires, moins il y aura de chances de rencontrer des problèmes de compatibilités. 
          <br> Dans le cadre des frameworks comme React et Angular, leur succès tient en l'entreprise qui a développé la frame work, l'une est détenue par Facebook(React), l'autre par google(Angular).
          <br>Il est nécessaire dans le cadre d'une application de banque en ligne de choisir l'uniformité pour plusieurs raisons : google peut apporter une solution de développement dans toutes les strates d'une application ; dans le développement (Angular/typescript), les test unitaires, etc.
          </p>
        <h3>La gestion de l'état</h3>
          <p>Il existe la gestion de l'état via NgRx (inspiré de Redux). Cela permet de gérer des données complexes, telles que les transactions bancaires.
            <br>Il permet aussi d'inciter le développeur à utiliser une clean architecture
          </p>
        <h3>Le routage</h3>
          <p>Angular offre un système de routage puissant pour gérer la navigation entre différentes pages de l’application. Dans une application de banque, cela permet de gérer les vues pour les comptes, les transactions, les profils, etc.</p>
        <h3>La sécurité</h3>
          <p>La sécurité est primordiale dans une application de banque. Angular facilite la mise en œuvre de mesures de sécurité telles que la prévention des attaques XSS (cross-site scripting) et CSRF (cross-site request forgery).</p>
          <h3>La performance</h3>
          <p>Angular optimise automatiquement les performances en utilisant la détection des modifications et le rendu côté serveur (SSR). Cela garantit une expérience utilisateur fluide, même avec des données complexes.</p>
  </section>
    
  `,
  styleUrl: './body.component.css'
})
export class BodyComponent {

}

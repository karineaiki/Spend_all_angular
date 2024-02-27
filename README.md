# Comment Installer Angular ?


## Prérequis

- node.js
- npm

Pour vérifier si votre ordinateur est doté de ces deux modules, vous pouvez faire ces deux commandes sur votre terminal :
- `node --version`
- `npm --version`

Si les commandes ne sont pas reconnues vous pouvez suivre les indications pour leur installation sur votre MacOS en allant sur : https://brew.sh/

## Installation

Pour installer angular sur votre ordinateur, veuillez faire la commande :
- `npm install -g @angular/cli`

Sur votre terminal, à l'aide de "cd", allez vers le chemin où vous souhaitez initier votre projet, puis créer votre projet en tapant la commande `ng new nom-de-votre-projet` (remplacez nom-de-votre-projet par ce que vous voulez)

## Lancez le serveur

Vous pouvez faire la commande `ng serve` pour lancer le serveur de votre projet. Dans le terminal, vous pourrez lire le lien vers le localhost de votre application : http://localhost:4200/


## Créer un composant

En créant un composant, angular va fournir un dossier avec un fichier.ts, et un fichier .css
`ng generate component nom-de-votre-composant --inline-template --skip-tests`

Ensuite, allez sur le app.component.ts, et rajouter l'import du composant :
import { NomDuComposantComponent } from './nom.du.composant/nom.du.composant.component'; puis dans l'import, ajouter le composant.
dans le template, vous pouvez rajouter le <app-nom-du-composant></app-nom-du-composant> pour rajouter l'élément dans le projet.

## Code scaffolding

Run `ng generate component component-name` to generate a new component. You can also use `ng generate directive|pipe|service|class|guard|interface|enum|module`.

## Build

Run `ng build` to build the project. The build artifacts will be stored in the `dist/` directory.

## Running unit tests

Run `ng test` to execute the unit tests via [Karma](https://karma-runner.github.io).

## Running end-to-end tests

Run `ng e2e` to execute the end-to-end tests via a platform of your choice. To use this command, you need to first add a package that implements end-to-end testing capabilities.

## Further help

To get more help on the Angular CLI use `ng help` or go check out the [Angular CLI Overview and Command Reference](https://angular.io/cli) page.

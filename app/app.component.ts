import { Component } from '@angular/core';

@Component({
  selector: 'my-app',
  template: `
    <h1>{{title}}</h1>
      <a routerLink="/todos">Lista los todos</a>
      <a routerLink="/dashboard" >Dashboard</a>
   <router-outlet></router-outlet>
  `
})
export class AppComponent {
  title = 'Tour of Heroes';
}
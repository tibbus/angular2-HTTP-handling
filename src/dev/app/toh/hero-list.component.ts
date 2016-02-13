import {Component, OnInit} from 'angular2/core';
import {Hero}              from './hero';
import {HeroService}       from './hero.service';

@Component({
    selector: 'hero-list',
    template: `
  <h3>Heroes:</h3>
  <ul>
    <li *ngFor="#hero of heroes">
      {{ hero.name }}
    </li>
  </ul>

  <div class="error" *ngIf="errorMessage">{{errorMessage}}</div>
  `,
    styles: ['.error {color:red;}']
})

export class HeroListComponent implements OnInit {
    constructor(private _heroService: HeroService) { }

    errorMessage: string;
    heroes: Hero[];

    ngOnInit() { this.getHeroes(); }

    getHeroes() {
        this._heroService.getHeroes()
            .subscribe(
            heroes => this.heroes = heroes,
            error => this.errorMessage = <any>error);
    }
}
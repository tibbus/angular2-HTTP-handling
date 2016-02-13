﻿import {Injectable}     from 'angular2/core';
import {Http, Response} from 'angular2/http';
import {Headers, RequestOptions} from 'angular2/http';
import {Hero}           from './hero';
import {Observable}     from 'rxjs/Observable';

@Injectable()
export class HeroService {
    constructor(private http: Http) { }

    private _heroesUrl = 'style/heroes.json';

    getHeroes() {
        var test: any = this.http.get(this._heroesUrl).map(res => <Hero[]>res.json().data);

        return test
            .catch(this.handleError);
    }

    addHero(name: string): Observable<Hero> {

        let body = JSON.stringify({ name });
        let headers = new Headers({ 'Content-Type': 'application/json' });
        let options = new RequestOptions({ headers: headers });

        return this.http.post(this._heroesUrl, body, options)
            .map(res => <Hero>res.json().data)
            .catch(this.handleError)
    }

    private handleError(error: Response) {
        // in a real world app, we may send the server to some remote logging infrastructure
        // instead of just logging it to the console
       // console.error(error);
        return Observable.throw(error.json().error || 'Server error');
    }
}
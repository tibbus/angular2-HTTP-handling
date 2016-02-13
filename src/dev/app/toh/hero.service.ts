import {Injectable}     from 'angular2/core';
import {Http, Response} from 'angular2/http';
import {Headers, RequestOptions} from 'angular2/http';
import {Hero}           from './hero';
import {Observable}     from 'rxjs/Observable';

@Injectable()
export class HeroService {
    constructor(private http: Http) { }

    // static heroes.json file
    private _heroesUrl = '/heroes';

    getHeroes() {
        return this.http.get(this._heroesUrl)
            .map((res): Hero[] => res.json())
            .do(data => console.log(data)) // eyeball results in the console
            .catch(this.handleError);
    }

    private handleError(error: Response) {
        // in a real world app, we may send the server to some remote logging infrastructure
        // instead of just logging it to the console
        console.error(error);
        return Observable.throw(error.text() || 'Server error');
    }
}
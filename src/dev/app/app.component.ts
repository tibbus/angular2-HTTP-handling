import {Component} from 'angular2/core';
import {TohComponent} from './toh/toh.component';
import {WikiComponent} from './wiki/wiki.component';

@Component({
    selector: 'my-app',
    template: `<div>
                <my-toh></my-toh> 
                <my-wiki></my-wiki>   
            </div>
              `,
    directives: [TohComponent, WikiComponent]
})

export class AppComponent {
    public sayHello: string = "Hello there !";
}
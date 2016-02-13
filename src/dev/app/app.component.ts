import {Component} from 'angular2/core';
import {TohComponent} from './toh/toh.component';

@Component({
    selector: 'my-app',
    template: `<div>
                <my-toh></my-toh>    
            </div>
              `,
    directives: [TohComponent]
})

export class AppComponent {
    public sayHello: string = "Hello there !";
}
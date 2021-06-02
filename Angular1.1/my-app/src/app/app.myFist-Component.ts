import { Component } from '@angular/core';

@Component({
    selector: 'app-myFirstComp',
    templateUrl: './app.component.html',
    styleUrls: ['./app.component.css']
})


export class myFirstClass {

    public saludando:string = 'Hi there!!! ';
    saludando2: string = 'Mi saludo';

}
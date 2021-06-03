import { Component} from '@angular/core';

@Component({
  selector: 'app-first-component',
  templateUrl: './first-component.component.html',
  styleUrls: ['./first-component.component.css']
})
export class FirstComponentComponent{

  img = 'https://thecatapi.com/api/images/get?format=src&type=gif?results_per_page=';


}

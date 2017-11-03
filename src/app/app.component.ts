import { Component} from '@angular/core';
import { test1 } from './test1'; 

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  title = 'Angular App';
 
  constructor() {
    test1()
  }

}






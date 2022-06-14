import { Component } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  title = 'list-app';
  data: any[] = [];

  async ngOnInit() {
    const response = await fetch('https://jsonplaceholder.typicode.com/photos');
    this.data = await response.json();

    console.log(this.data);
  }
}

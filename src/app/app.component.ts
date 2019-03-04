import { Component } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent {
  title = 'bootcamp-app';

  activeView = 'main';

  headerItems: any[] = [{
    label: 'Main',
    alias: 'main',
    subItems: []
  }, {
    label: 'Products',
    alias: 'products',
    subItems: [{
      label: 'All Categories',
      alias: 'products'
    }, {
      label: 'BMW',
      alias: 'products'
    }, {
      label: 'Mercedes',
      alias: 'products'
    }, {
      label: 'Zhyguli',
      alias: 'products'
    }, {
      label: 'Audi',
      alias: 'products'
    }, {
      label: 'Toyota',
      alias: 'products/toyota'
    }]
  }];

  changeView(view: any){
    this.activeView = view;
  }

}

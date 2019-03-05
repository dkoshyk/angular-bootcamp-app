import { Component, OnInit } from '@angular/core';
import { HeaderService } from '@shared/services/header.service';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent implements OnInit {
  title = 'bootcamp-app';

  //activeView = 'main';
  activeView = 'products';
  headerItems: any[];

  constructor(
    private headerService: HeaderService
  ){} 

  ngOnInit(){
    this.headerService.getMenuItems().subscribe(data => {
      this.headerItems = data;
    })  
  }

  changeView(view: any){
    this.activeView = view;
  }

}

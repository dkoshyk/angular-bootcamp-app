import { Component, OnInit, AfterViewInit, OnDestroy } from '@angular/core';
import { HeaderService } from '@shared/services/header.service';
import { AuthService } from './auth/services/auth.service';
import { Subscription } from 'rxjs';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent implements OnInit, AfterViewInit, OnDestroy {

  headerItems: any[];
  isLoggedIn: boolean;
  userInfo: any;

  private isLoggedIn$: Subscription;

  constructor(
    private headerService: HeaderService
    , private authService: AuthService
  ) { }

  ngOnInit() {
    this.authService.initUser();
    this.headerService.getMenuItems().subscribe(data => {
      this.headerItems = data;
    })
  }

  ngAfterViewInit(): void {
    setTimeout(() => {
      this.isLoggedIn$ = this.authService.isLoggedIn.subscribe((isLoggedIn) => {
        this.isLoggedIn = isLoggedIn;
      })
    })

    // this.isLoggedIn$ = this.authService.isLoggedIn.subscribe((isLoggedIn) => {
    //   // if(isLoggedIn){
    //   //   this.userInfo = this.authService.getUser();
    //   // }
    //   this.isLoggedIn = isLoggedIn;
    // })

  }

  ngOnDestroy(): void {
    this.isLoggedIn$.unsubscribe();
  }

}

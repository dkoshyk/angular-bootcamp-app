import { Component, OnInit, Input } from '@angular/core';
import { Router } from '@angular/router';
import { Subscription } from 'rxjs';
import { AuthService } from 'src/app/auth/services/auth.service';

@Component({
  selector: 'boot-header',
  templateUrl: './header.component.html',
  styleUrls: ['./header.component.scss']
})
export class HeaderComponent implements OnInit {

  @Input() menuItems;

  @Input() isLoggedIn;

  dropdownItems: any[] = [];

  constructor(private router: Router
    , private authService: AuthService) { }

  ngOnInit() {
  }

  selectItem(item: any): void {
    if (item.subItems && item.subItems.length) {
      this.dropdownItems = item.subItems;

      return;
    }

    this.router.navigate([item.alias]);
  }

  goToAuth() {
    this.router.navigate(['auth']);
  }

  logOut() {
    this.authService.logout();
    this.router.navigate(['auth']);
  }
}

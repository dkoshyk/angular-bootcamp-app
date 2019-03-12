import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { AuthRoutingModule } from './auth-routing.module';
import { AuthComponent } from './auth.component';
import { AuthService } from './services/auth.service';
import { MatInputModule, MatCardModule, MatFormFieldModule, MatButtonModule, MatListModule } from '@angular/material';
import { FormsModule } from '@angular/forms';
import { FlexLayoutModule } from '@angular/flex-layout';

@NgModule({
  declarations: [AuthComponent],
  //providers: [AuthService],
  imports: [
    CommonModule,
    AuthRoutingModule,
    FlexLayoutModule,
    MatCardModule,
    MatFormFieldModule,
    FormsModule,
    MatInputModule,
    MatButtonModule,
    MatListModule
  ]
})
export class AuthModule { }

import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';

import { HeaderModule } from '@shared/header/header.module';
import { AppComponent } from './app.component';

import { HeaderService } from '@shared/services/header.service';
import { HttpClientModule, HTTP_INTERCEPTORS } from '@angular/common/http';
import { AngularFireModule } from '@angular/fire';
import { AngularFireDatabaseModule } from '@angular/fire/database';
import { environment } from 'src/environments/environment';
import { AppRoutingModule } from './app-routing.module';
import { SpinnerInterceptor } from './core/interceptors/spinner.interceptor';
import { MatProgressSpinnerModule } from '@angular/material';

@NgModule({
  declarations: [
    AppComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    HeaderModule,
    BrowserAnimationsModule,
    HttpClientModule,
    AngularFireModule.initializeApp(environment.firebaseConfig),
    AngularFireDatabaseModule,
    MatProgressSpinnerModule
  ],
  providers: [HeaderService, {
      provide: HTTP_INTERCEPTORS, 
      useClass: SpinnerInterceptor, 
      multi: true
    }],
  bootstrap: [AppComponent]
})
export class AppModule { }

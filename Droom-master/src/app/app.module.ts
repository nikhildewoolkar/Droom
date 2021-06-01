import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppComponent } from './app.component';
import { FooterComponent } from './footer/footer.component';
import { NavbarComponent } from './navbar/navbar.component';
import { LayoutModule } from '@angular/cdk/layout';
import { MatToolbarModule, MatButtonModule, MatSidenavModule, MatIconModule, MatListModule } from '@angular/material';
import { Sidenav1Component } from './sidenav1/sidenav1.component';
import { Sidenav2Component } from './sidenav2/sidenav2.component';
import {RouterModule} from '@angular/router';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { HomeComponent } from './home/home.component';
import { QuicksellComponent } from './quicksell/quicksell.component';
import { LoginComponent } from './login/login.component';
@NgModule({
  declarations: [
    AppComponent,
    FooterComponent,
    NavbarComponent,
    Sidenav1Component,
    Sidenav2Component,
    HomeComponent,
    QuicksellComponent,
    LoginComponent
  ],
  imports: [
    BrowserModule,
    LayoutModule,
    MatToolbarModule,
    MatButtonModule,
    MatSidenavModule,
    MatIconModule,
    BrowserAnimationsModule,
    MatListModule,
    RouterModule.forRoot([
      {path:'app',component:AppComponent},
      {path:'sidenav1',component:Sidenav1Component},
      {path:'sidenav2',component:Sidenav2Component},
      {path: 'home',component:HomeComponent},
      {path: 'quicksell',component:QuicksellComponent},
      {path: 'login',component:LoginComponent}
    ])
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }

import { NgModule } from '@angular/core';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { Routes, RouterModule } from '@angular/router';
import { CommonModule } from '@angular/common';
import { BrowserModule } from '@angular/platform-browser';
import { HomeComponent } from './home.component';
import { HeaderComponent } from './header/header.component';
import { ToursComponent } from './tours/tours.component';
import { AboutComponent } from './about/about.component';
import { ContactBannerComponent } from './contact-banner/contact-banner.component';

const homeRoute: Routes = [
    { path: '', component: HomeComponent },

];

@NgModule({
  imports: [
    BrowserModule,
    BrowserAnimationsModule,
    CommonModule,
    RouterModule.forRoot(homeRoute)
  ],
  exports: [RouterModule],
  declarations: [
    HomeComponent,
    HeaderComponent,
    ToursComponent,
    AboutComponent,
    ContactBannerComponent,
  ]
})

export class HomeRoutingModule { }
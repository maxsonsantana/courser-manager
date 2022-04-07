import { Component, NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { FormsModule } from '@angular/forms';

import { AppComponent } from './app.component';
import { CourseListComponent } from './courses/course-list.component';
import { StarComponent } from './star/star.component';
import { ReplacePipe } from './pipe/replace.pipe';
import { NavBarComponent } from './nav-bar/nav-bar.component';
import { RouterModule } from '@angular/router';
import { Error404Component } from './error-404/error-404.component';
import { DataBindingComponent } from './dataBinding/dataBinding.component';
import { CourseInfoComponent } from './courses/course-info.component';

@NgModule({
  declarations: [
    AppComponent,
    CourseListComponent,
    StarComponent,
    ReplacePipe,
    NavBarComponent,
    Error404Component,
    DataBindingComponent,
    CourseInfoComponent
  ],
  imports: [
    BrowserModule,
    FormsModule,
    RouterModule.forRoot([//Espera um array do tipo objetos de rotas
      {
        path: 'courses',
        component: CourseListComponent
      },
      {
        path: 'courses/info/:id',
        component: CourseInfoComponent
      },
      {
        path: '',//default path
        redirectTo: 'courses',
        pathMatch: 'full'
      },
      {
        path: 'dataBinding',
        component: DataBindingComponent
      },

      {
        path: '**',//catch all path
        component: Error404Component        
      }      
    ])
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }

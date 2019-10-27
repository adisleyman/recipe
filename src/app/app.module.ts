
import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';

import { AppComponent } from './app.component';
import { RouterModule } from '@angular/router';
import { path } from './Path';
import { HttpClientModule } from '@angular/common/http';
import { MDBBootstrapModule } from 'angular-bootstrap-md';
import { FormsModule } from '@angular/forms';
import { AddRecepieComponent } from './add-recepie/add-recepie.component';
import { HomePageComponent } from './home-page/home-page.component';
import { ManagerComponent } from './manager/manager.component';
import { NotebookComponent } from './notebook/notebook.component';
import { PrivateChefComponent } from './private-chef/private-chef.component';
import { RecepieComponent } from './recepie/recepie.component';
import { SearchRecepieComponent } from './search-recepie/search-recepie.component';
import { ShefComponent } from './shef/shef.component';
import { UserComponent } from './user/user.component';
import { ShowRecepieComponent } from './show-recepie/show-recepie.component';

@NgModule({
  declarations: [
    AppComponent,
    AddRecepieComponent,
    HomePageComponent,
    ManagerComponent,
    NotebookComponent,
    PrivateChefComponent,
    RecepieComponent,
    SearchRecepieComponent,
    ShefComponent,
    UserComponent,
    ShowRecepieComponent
  ],
  imports: [
    BrowserModule,
    BrowserAnimationsModule,
    HttpClientModule,
    MDBBootstrapModule.forRoot(),
    RouterModule.forRoot(path),
    FormsModule,
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
    
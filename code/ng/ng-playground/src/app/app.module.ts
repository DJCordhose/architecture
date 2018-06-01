import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { HttpClientModule } from '@angular/common/http';

import { ButtonComponent } from './button.component';
import { ButtonBarComponent } from './buttonbar.component';
import { AppComponent } from './app.component';
import { TableComponent } from './table.component';
import { AdminUserComponent } from './admin.user.component';
import { TitleComponent } from './title.component';
import { DetailComponent } from './detail/detail.component';
import { MasterComponent } from './master.component';
import { TableWrapperComponent } from './table.wrapper.component';

import {SafePipe} from "./app.component"

@NgModule({
  declarations: [
    AppComponent,
    TableComponent,
    ButtonComponent,
    ButtonBarComponent,
    AdminUserComponent,
    TitleComponent,
    DetailComponent,
    MasterComponent,
    TableWrapperComponent,
    SafePipe
  ],
  imports: [
    BrowserModule,
    HttpClientModule,
    FormsModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }

import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { HttpClientModule } from '@angular/common/http';

import { AppComponent } from './app.component';
import { NavComponent } from './nav.component';
import { NgrxSandboxModule } from './ngrx-sandbox/ngrx-sandbox.module';

import { EffectsModule } from '@ngrx/effects';
import { RemoteEffects } from './ngrx-sandbox/remote.effects';
import { AppRoutingModule } from './/app-routing.module';

@NgModule({
  declarations: [
    AppComponent,
    NavComponent
  ],
  imports: [
    BrowserModule,
    FormsModule,
    HttpClientModule,
    NgrxSandboxModule,
    EffectsModule.forRoot([RemoteEffects]),
    AppRoutingModule
  ],
  providers: [],
  // bootstrap: [AppComponent]
  bootstrap: [NavComponent]
})
export class AppModule { }

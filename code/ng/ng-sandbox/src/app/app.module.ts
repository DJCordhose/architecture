import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { HttpClientModule } from '@angular/common/http';

import { AppComponent } from './app.component';
import { NgrxSandboxModule } from './ngrx-sandbox/ngrx-sandbox.module';

import { EffectsModule } from '@ngrx/effects';
import { RemoteEffects } from './ngrx-sandbox/remote.effects';

@NgModule({
  declarations: [
    AppComponent
  ],
  imports: [
    BrowserModule,
    FormsModule,
    HttpClientModule,
    NgrxSandboxModule,
    EffectsModule.forRoot([RemoteEffects])
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }

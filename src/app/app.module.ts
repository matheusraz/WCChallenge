import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppComponent } from './app.component';
import { TeamsComponent } from './teams/teams.component';
import { ListaTeamsComponent } from './lista-teams/lista-teams.component';

@NgModule({
  declarations: [
    AppComponent,
    TeamsComponent,
    ListaTeamsComponent
  ],
  imports: [
    BrowserModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }

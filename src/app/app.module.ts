import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { HttpModule } from '@angular/http';
import { ReactiveFormsModule } from '@angular/forms';

import { RouterModule } from '@angular/router';
import { ROUTES } from './app.routes';

import { PetitionService } from './petition.service';
import { AppComponent } from './app.component';
import { AuthorsComponent } from './authors/authors.component';

import { MaterialModule } from '@angular/material';

@NgModule({
  declarations: [
    AppComponent,
    AuthorsComponent
  ],
  imports: [
    MaterialModule.forRoot(),
    BrowserModule,
    FormsModule,
    ReactiveFormsModule,
    HttpModule,
    RouterModule.forRoot(ROUTES, { useHash: true }),
  ],
  providers: [PetitionService],
  bootstrap: [AppComponent]
})
export class AppModule { }

import { NgModule }       from '@angular/core';
import { BrowserModule }  from '@angular/platform-browser';
import { FormsModule }    from '@angular/forms';

import { AppComponent }         from './app.component';
import { DashboardComponent }   from './dashboard/dashboard.component';
import { HeroDetailComponent }  from './hero-detail/hero-detail.component';
import { HeroesComponent }      from './heroes/heroes.component';
import { HeroService }          from './hero.service';
import { MessageService }       from './message.service';
import { MessagesComponent }    from './messages/messages.component';

import { AppRoutingModule }     from './app-routing.module';
import { AccordionGroupComponent } from './components/accordion-group/accordion-group.component';
import { AccordionComponent } from './components/accordion/accordion.component';

import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { DialogModule }  from 'primeng/dialog';
import {DataTableModule} from 'primeng/datatable';
import {EditorModule} from 'primeng/editor';

@NgModule({
  imports: [
    BrowserModule,
    FormsModule,
    AppRoutingModule,
    BrowserAnimationsModule,
    DialogModule,
    DataTableModule,
    EditorModule
  ],
  declarations: [
    AppComponent,
    DashboardComponent,
    HeroesComponent,
    HeroDetailComponent,
    MessagesComponent,
    AccordionGroupComponent,
    AccordionComponent  
  ],
  providers: [ HeroService, MessageService ],
  bootstrap: [ AppComponent ]
})
export class AppModule { }

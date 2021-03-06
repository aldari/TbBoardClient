import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { HttpModule } from '@angular/http';
import { LOCALE_ID } from '@angular/core';

import { AppComponent } from './app.component';
import { HeaderComponent } from './header/header.component';
import { AppRoutingModule } from './app-routing.module';
import { QuoteListComponent } from './quote-list/quote-list.component';
import { QuoteEditComponent } from './quote-list/quote-edit/quote-edit.component';
import { QuoteService } from './quote-list/quote.service';
import { QuoteNewComponent } from './quote-list/quote-new/quote-new.component';
import { CategoryService } from './quote-list/category.service';
import { PageNotFoundComponent } from './page-not-found/page-not-found.component';
import { ValidateService } from './validate.service';
import { AppConfig } from './app.config';

@NgModule({
  declarations: [
    AppComponent,
    HeaderComponent,
    QuoteListComponent,
    QuoteEditComponent,
    QuoteNewComponent,
    PageNotFoundComponent
  ],
  imports: [
    BrowserModule,
    FormsModule,
    HttpModule,
    AppRoutingModule
  ],
  providers: [QuoteService, CategoryService, ValidateService, { provide: LOCALE_ID, useValue: 'ru-RU' }, AppConfig,],
  bootstrap: [AppComponent]
})
export class AppModule { }

import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { FormsModule } from '@angular/forms';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { HomePageComponent } from './components/home-page/home-page.component';
import { SummaryComponent } from './components/summary/summary.component';
import { ShoppingCartComponent } from './components/shopping-cart/shopping-cart.component';
import { AboutPageComponent } from './components/about-page/about-page.component';
import { ContactPageComponent } from './components/contact-page/contact-page.component';
import { BookDetailsPageComponent } from './components/book-details-page/book-details-page.component';
import { AddBookPageComponent } from './components/add-book-page/add-book-page.component';
import { Below30Directive } from './directives/below30.directive';
import { LessThanDirective } from './directives/less-than.directive';
import { LastNameFirstPipe } from './pipes/last-name-first.pipe';
import { HighlightDirective } from './directives/highlight.directive';

@NgModule({
  declarations: [
    AppComponent,
    HomePageComponent,
    SummaryComponent,
    ShoppingCartComponent,
    AboutPageComponent,
    ContactPageComponent,
    BookDetailsPageComponent,
    AddBookPageComponent,
    Below30Directive,
    LessThanDirective,
    LastNameFirstPipe,
    HighlightDirective
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    FormsModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }

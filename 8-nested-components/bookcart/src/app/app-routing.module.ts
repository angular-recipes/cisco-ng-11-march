import { AddBookTRVPageComponent } from './components/add-book-trvpage/add-book-trvpage.component';
import { AddBookPageComponent } from './components/add-book-page/add-book-page.component';
import { BookDetailsPageComponent } from './components/book-details-page/book-details-page.component';
import { ShoppingCartComponent } from './components/shopping-cart/shopping-cart.component';
import { SummaryComponent } from './components/summary/summary.component';
import { HomePageComponent } from './components/home-page/home-page.component';
import { ContactPageComponent } from './components/contact-page/contact-page.component';
import { AboutPageComponent } from './components/about-page/about-page.component';
import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

const routes: Routes = [
  {path: 'about', component: AboutPageComponent},
  {path: 'contact', component: ContactPageComponent},
  {path: 'home', component: HomePageComponent},
  {path: 'summary', component: SummaryComponent},
  {path: 'cart', component: ShoppingCartComponent},
  {path: 'add-book', component: AddBookPageComponent},
  {path: 'add-book-trv', component: AddBookTRVPageComponent},
  {path: 'book/:id', component: BookDetailsPageComponent}
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }

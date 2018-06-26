import { HttpModule } from '@angular/http'
import { FormsModule } from '@angular/forms'
import { RouterModule } from '@angular/router'
import { NgModule, LOCALE_ID } from '@angular/core'
import { BrowserModule } from '@angular/platform-browser'

import { ROUTES } from './app.router'

import { RestaurantsService } from './restaurants/restaurants.service'
import { ShoppingCartService } from './restaurant-detail/shopping-cart/shopping-cart.service'

import { AppComponent } from './app.component'
import { HomeComponent } from './home/home.component'
import { AboutComponent } from './about/about.component'
import { OrderComponent } from './order/order.component'
import { HeaderComponent } from './header/header.component'
import { InputComponent } from './shared/input/input.component'
import { MenuComponent } from './restaurant-detail/menu/menu.component'
import { RestaurantsComponent } from './restaurants/restaurants.component'
import { ReviewsComponent } from './restaurant-detail/reviews/reviews.component'
import { RestaurantComponent } from './restaurants/restaurant/restaurant.component'
import { MenuItemComponent } from './restaurant-detail/menu-item/menu-item.component'
import { RestaurantDetailComponent } from './restaurant-detail/restaurant-detail.component'
import { ShoppingCartComponent } from './restaurant-detail/shopping-cart/shopping-cart.component';

@NgModule({
  declarations: [
    AppComponent,
    HomeComponent,
    MenuComponent,
    AboutComponent,
    OrderComponent,
    InputComponent,
    HeaderComponent,
    ReviewsComponent,
    MenuItemComponent,
    RestaurantComponent,
    RestaurantsComponent,
    ShoppingCartComponent,
    RestaurantDetailComponent,
  ],
  imports: [
    HttpModule,
    FormsModule,
    BrowserModule,
    RouterModule.forRoot(ROUTES)
  ],
  providers: [
    RestaurantsService,
    ShoppingCartService,
    { provide: LOCALE_ID, useValue: 'pt-BR' }
  ],
  bootstrap: [AppComponent]
})
export class AppModule { }

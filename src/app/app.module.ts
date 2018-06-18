import { NgModule } from '@angular/core'
import { HttpModule } from '@angular/http'
import { RouterModule } from '@angular/router'
import { BrowserModule } from '@angular/platform-browser'

import { ROUTES } from './app.router'

import { RestaurantsService } from './restaurants/restaurants.service'

import { AppComponent } from './app.component'
import { HomeComponent } from './home/home.component'
import { AboutComponent } from './about/about.component'
import { HeaderComponent } from './header/header.component'
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
    HeaderComponent,
    ReviewsComponent,
    MenuItemComponent,
    RestaurantComponent,
    RestaurantsComponent,
    ShoppingCartComponent,
    RestaurantDetailComponent
  ],
  imports: [
    HttpModule,
    BrowserModule,
    RouterModule.forRoot(ROUTES)
  ],
  providers: [
    RestaurantsService
  ],
  bootstrap: [AppComponent]
})
export class AppModule { }

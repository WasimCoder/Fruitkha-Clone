import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { HeaderComponent } from './components/header/header.component';
import { FooterComponent } from './components/footer/footer.component';
import { HomeComponent } from './components/home/home.component';
import { StyleDirective } from './directives/style.directive';
import { DisplayComponent } from './components/display/display.component';
import { ProductsComponent } from './components/products/products.component';
import { DealComponent } from './components/deal/deal.component';
import { ReviewComponent } from './components/review/review.component';
import { VideoComponent } from './components/video/video.component';
import { NewsComponent } from './components/news/news.component';
import { LogoComponent } from './components/logo/logo.component';
import { NgbModule , NgbCarouselModule} from '@ng-bootstrap/ng-bootstrap';


@NgModule({
  declarations: [
    AppComponent,
    HeaderComponent,
    FooterComponent,
    HomeComponent,
    StyleDirective,
    DisplayComponent,
    ProductsComponent,
    DealComponent,
    ReviewComponent,
    VideoComponent,
    NewsComponent,
    LogoComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    NgbModule,
    NgbCarouselModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }

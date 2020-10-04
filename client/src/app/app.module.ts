import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { HttpModule, JsonpModule } from '@angular/http';
import { HttpClientModule } from '@angular/common/http';
import { NgxPaginationModule } from 'ngx-pagination';
import { Ng2SearchPipeModule } from 'ng2-search-filter';

import { DataService } from './data.service';
import { AppComponent } from './app.component';
import { GetformsService } from './getforms.service';
import { BuyformService } from '../services/buyform.service';
import { FrontpageComponent } from './frontpage/frontpage.component';
import { SellpageComponent } from './sellpage/sellpage.component';
import { BuypageComponent } from './buypage/buypage.component';
import { AppRoutingModule } from './/app-routing.module';
import { OrderpageComponent } from './orderpage/orderpage.component';
import { OrderpagebuyComponent } from './orderpagebuy/orderpagebuy.component';
import { OrderpagesellComponent } from './orderpagesell/orderpagesell.component';
import { InfopageComponent } from './infopage/infopage.component'; 


@NgModule({
  declarations: [
    AppComponent,
    FrontpageComponent,
    SellpageComponent,
    BuypageComponent,
    OrderpageComponent,
    OrderpagebuyComponent,
    OrderpagesellComponent,
    InfopageComponent
  ],
  imports: [
    BrowserModule,
    FormsModule,
    NgxPaginationModule,
    Ng2SearchPipeModule,
    ReactiveFormsModule,
    HttpClientModule,
    HttpModule,
    JsonpModule,
    AppRoutingModule
  ],
  providers: [
    DataService,
    GetformsService,
    BuyformService
  ],
  bootstrap: [AppComponent],

})


export class AppModule { }

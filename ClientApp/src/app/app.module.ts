import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { HttpClientModule } from '@angular/common/http';
import { RouterModule } from '@angular/router';
import { BrowserAnimationsModule} from '@angular/platform-browser/animations';
import{NgbModule } from '@ng-bootstrap/ng-bootstrap';

//========================================= data service===============================================
import {DataService} from '../app/shared/data.service';
import {ProductsService} from '../app/shared/products.service'
import { AppComponent } from './app.component';
import { NavMenuComponent } from './nav-menu/nav-menu.component';
import { HomeComponent } from './home/home.component';
import { CounterComponent } from './counter/counter.component';
import { FetchDataComponent } from './fetch-data/fetch-data.component';
import { CarouselComponent } from './home/carousel/carousel.component';
import { BannerComponent } from './nav-menu/banner/banner.component';
import { FooterComponent } from './footer/footer.component';

import { CementComponent } from './product/cement/cement.component';
import { ProductComponent } from './product/product.component';

import { ImageLightboxComponent } from './product/image-lightbox/image-lightbox.component';
import { OrderComponent } from './product/order/order.component';
import { SalesComponent } from './product/sales/sales.component';
import { LightboxComponent } from './product/lightbox/lightbox.component';
import { GhacemSuperStrongComponent } from './product/cement/ghacem-super-strong/ghacem-super-strong.component';
import { GhacemSuperExtraComponent } from './product/cement/ghacem-super-extra/ghacem-super-extra.component';
import { DangoteComponent } from './product/cement/dangote/dangote.component';
import { CimafClassicComponent } from './product/cement/cimaf-classic/cimaf-classic.component';
import { CimafUltimateComponent } from './product/cement/cimaf-ultimate/cimaf-ultimate.component';
import { GhacemSuperRapidComponent } from './product/cement/ghacem-super-rapid/ghacem-super-rapid.component';
import { ShopComponent } from './shop/shop.component';
import { RelatedProductComponent } from './product/related-product/related-product.component';

import { ShoppingModalComponent } from './shared/shopping-modal/shopping-modal.component';
import { CheckoutComponent } from './checkout/checkout.component';
import { BuildingAggregatesComponent } from './product/building-aggregates/building-aggregates.component';
import { ChippingsComponent } from './product/chippings/chippings.component';
import { SandstoneComponent } from './product/sandstone/sandstone.component';
import { PebblesComponent } from './product/pebbles/pebbles.component';
import { LimestoneComponent } from './product/limestone/limestone.component';
import { DeliveryComponent } from './home/delivery/delivery.component';
import { SearchPopoverComponent } from './nav-menu/banner/search-popover/search-popover.component';
import { AboutusComponent } from './home/aboutus/aboutus.component';
import { ContactusComponent } from './home/contactus/contactus.component';



@NgModule({
  declarations: [ 
    AppComponent,NavMenuComponent, HomeComponent,CounterComponent,FetchDataComponent,
    CarouselComponent,BannerComponent,FooterComponent, CementComponent, ProductComponent, GhacemSuperStrongComponent,
     ImageLightboxComponent,OrderComponent, SalesComponent, LightboxComponent,GhacemSuperExtraComponent,
    DangoteComponent, CimafClassicComponent, CimafUltimateComponent, GhacemSuperRapidComponent, ShopComponent, RelatedProductComponent, ShoppingModalComponent,
     CheckoutComponent, BuildingAggregatesComponent,
      ChippingsComponent, SandstoneComponent, PebblesComponent,
       LimestoneComponent, DeliveryComponent, SearchPopoverComponent, AboutusComponent, ContactusComponent 
       
  ],
  imports: [
    BrowserModule.withServerTransition({ appId: 'ng-cli-universal' }),
    HttpClientModule,
    FormsModule,
    ReactiveFormsModule,
    BrowserAnimationsModule,
    NgbModule,
   
    RouterModule.forRoot([
      { path: '', component: HomeComponent, pathMatch: 'full' },
      { path: 'counter', component: CounterComponent },
      { path: 'fetch-data', component: FetchDataComponent },
      {path: 'products/category/cement', component: CementComponent},
      {path: 'product', component: ProductComponent},
     
      {path: 'lightbox', component: ImageLightboxComponent},
      {path: 'Orders', component: OrderComponent},
      {path: 'sales', component: SalesComponent},
      {path: 'product/ghacem-super-strong', component: GhacemSuperStrongComponent},
      {path: 'product/ghacem-super-rapid', component: GhacemSuperRapidComponent},
      {path: 'product/ghacem-super-extra', component: GhacemSuperExtraComponent},
      {path: 'product/dangote', component: DangoteComponent},
      {path: 'product/cimaf-classic', component: CimafClassicComponent},
      {path: 'product/cimaf-ultimate', component: CimafUltimateComponent},
      {path: 'Shop', component: ShopComponent},
      {path: 'Checkout', component: CheckoutComponent},
      {path: 'products/category/pebbles', component: PebblesComponent},
      {path: 'products/category/sandstone', component: SandstoneComponent},
      {path: 'products/category/limestone', component: LimestoneComponent},
      {path: 'products/category/chippings', component: ChippingsComponent},
      {path: 'products/category/building-agregates', component: BuildingAggregatesComponent},
      {path: 'home/aboutus', component: AboutusComponent},
      {path: 'home/contactus', component: ContactusComponent}



    ]),
    NgbModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }

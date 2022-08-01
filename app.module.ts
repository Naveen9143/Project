import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { FormsModule } from '@angular/forms';
import{HttpClientModule} from '@angular/common/http';
import{GooglePayButtonModule} from '@google-pay/button-angular'
import { RouterModule } from '@angular/router';
import { AppComponent } from './app.component';
import { BedroomComponent } from './bedroom/bedroom.component';
import { BedroomcategoryComponent } from './bedroomcategory/bedroomcategory.component';
import { AddproductComponent } from './addproduct/addproduct.component';
import { SearchComponent } from './search/search.component';
import { AdminComponent } from './admin/admin.component';
import { NewAccountComponent } from './new-account/new-account.component';
import { UserComponent } from './user/user.component';
import { CartComponent } from './cart/cart.component';
import { PaymentComponent } from './payment/payment.component';
import { PaymentprocessComponent } from './paymentprocess/paymentprocess.component';


const route=[
  {path:"products",component:BedroomComponent},
  {path:"user",component:UserComponent},
  {path:"addproduct",component:AddproductComponent},
  {path:"login",component:BedroomComponent},
  {path:"createaccount",component:NewAccountComponent},
  {path:"",component:AdminComponent},
  {path:"editproduct/:id",component:AddproductComponent},
  {path:"search/:name",component:BedroomComponent},
  {path:"login/category/:cid",component:BedroomComponent},
  {path:"login/category/:cid/category/:cid",redirectTo:"login/category/:cid"},
  {path:"user/category/:cid",component:UserComponent},
  {path:"user/category/:cid/category/:cid",redirectTo:'user/category/:cid'},
  {path:"user/category/:cid/cart",redirectTo:'user/cart'},
  {path:"user/category/:cid/cart/user",redirectTo:'user'},
  {path:"user/search/:name",component:BedroomComponent},
  {path:"user/cart",component:CartComponent},
  {path:"user/cart/cart",redirectTo:'user'},
  {path:"user/cart/checkout",component:PaymentComponent},
  {path:"user/cart/user",redirectTo: 'user'},
  {path:"user/cart/checkout/makeapayment",component:PaymentprocessComponent}
  
]

@NgModule({
  declarations: [
    AppComponent,
    BedroomComponent,
    BedroomcategoryComponent,
    AddproductComponent,
    SearchComponent,
    AdminComponent,
    NewAccountComponent,
    UserComponent,
    CartComponent,
    PaymentComponent,
    PaymentprocessComponent,
  ],
  imports: [
    BrowserModule,
    HttpClientModule,
    FormsModule,
    RouterModule.forRoot(route),
    GooglePayButtonModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }


import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { CartService } from '../services/cart.service';

@Component({
  selector: 'app-payment',
  templateUrl: './payment.component.html',
  styleUrls: ['./payment.component.css']
})
export class PaymentComponent implements OnInit {
  public product:any=[]
  public grandTotal:number=0;
  
  
  constructor(private cservice:CartService,private route:Router) { }

  ngOnInit(): void {
    this.cservice.getProducts().subscribe(res=>{
      this.product=res;
      this.grandTotal=this.cservice.getTotalPrice();
     
    })
  }
paymentRequest:google.payments.api.PaymentDataRequest={
  apiVersion:2,
  apiVersionMinor:0,
  allowedPaymentMethods:[
    {
      type:'CARD',
      parameters:{
        allowedAuthMethods:['PAN_ONLY','CRYPTOGRAM_3DS'],
        allowedCardNetworks:['AMEX','VISA','MASTERCARD']
      },
      tokenizationSpecification:{
        type:'PAYMENT_GATEWAY',
        parameters:{
          gateway:'example',
          gatewayMerchantId:'exampleGatewayMerchantId'
        }
      }

    }
  ],
  merchantInfo:{
    merchantId:'12345678901234567890',
    merchantName:'Demo Merchant'
  },
  transactionInfo:{
    totalPriceStatus:'FINAL',
    totalPriceLabel:'Total',
    totalPrice:'10000',
    currencyCode:'INR',
    countryCode:'IN'
  },
  callbackIntents:['PAYMENT_AUTHORIZATION']

};
onLoadPaymentData=(
  event:Event

):void=>{
  const eventDetails=event as CustomEvent<google.payments.api.PaymentData>;
  console.log('load payment data',eventDetails.detail);
}

onPaymentDataAuthorized:google.payments.api.PaymentAuthorizedHandler=(
  paymentData
)=>{
  console.log('payment authorized',paymentData);
  alert("PaymentSuccessFull")
  this.route.navigateByUrl("user")
  return{
    transactionState:'SUCCESS'
    
  };
  
}
onError=(event:ErrorEvent):void=>{
 
  console.error('error',event.error);
  alert("paymentUnSuccessFull.Please Try Again!!!");
}


submit(){
  this.route.navigateByUrl("user/cart/checkout/makeapayment")
}

}

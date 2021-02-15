
import { LeftnavComponent } from './leftnav/leftnav.component';
import { Injectable } from '@angular/core';
import { HomeComponent } from './home/home.component';
import {BehaviorSubject, observable, Observable} from 'rxjs';
@Injectable({
  providedIn: 'root'
})
export class ItemListService {
  searchString: any;
  // static sort_max: any;
  // static sort_min: any;
  


  constructor() {
    
   }
  
  sort_max:any=1000000;
  sort_min:any=0;
  rating:any=0;
  cartvalue:number=0;
  name:any=[];
  total:number=0;

  items=[
    {id:1,name:"Apple MacBook Air Core i5 5th Gen - (8 GB/128 GB SSD/Mac OS Sierra)",substring:["Apple MacBook Air Core i5 5th Gen - (8 GB/128 GB SSD/Mac OS Sierra)","apple","macbook","air","core","i5","5th","gen","8GB","128GB","SSD","Mac","OS","Sierra"],price:67750,offer:"Bank OfferFlat INR 1750 Instant Discount on HDFC Bank Credit Cards and EMI on Debit/Credit Cards",src:"https://rukminim1.flixcart.com/image/416/416/jsnjbm80/computer/j/8/c/apple-na-thin-and-light-laptop-original-imafe6f78hur4jbh.jpeg?q=70",rating:1},
    {id:2,name:"SanDisk Ultra 64 GB Ultra Memory Card (With Adapter)",substring:["SanDisk Ultra 64 GB Ultra Memory Card (With Adapter)","SanDisk","Ultra","64GB","Ultra","Memory","Card","With Adapter"],price:849,offer:"No Cost EMI on Flipkart Axis Bank Credit Card", src:"https://rukminim1.flixcart.com/image/416/416/j7ksia80/memory-card/microsdxc/9/j/h/sandisk-sdsquar-064g-gn6ma-original-imaexs9zuyr9svhx.jpeg?q=70",rating:3},
    {id:3,name:"Whirlpool 1.5 Ton 5 Star Split Inverter AC - White",substring:["Whirlpool 1.5 Ton 5 Star Split Inverter AC - White"],price:29999,offer:"Flat INR 1750 Instant Discount on HDFC Bank Credit Cards and EMI on Debit/Credit Cards",src:"https://rukminim1.flixcart.com/image/416/416/kd4uj680/air-conditioner-new/e/w/p/1-5t-magicool-pro-5s-copr-inv-mps-1-5-split-whirlpool-inverter-original-imafu44ghmq8vdhg.jpeg?q=70",rating:5},
    {id:4,name:"Apple Macbook Air 13 Gold i5 5th Gen - (8 GB/128 GB SSD/Mac OS Sierra)",substring:["Apple Macbook Air 13 Gold i5 5th Gen - (8 GB/128 GB SSD/Mac OS Sierra)"],price:67750,offer:"Bank OfferFlat INR 1750 Instant Discount on HDFC Bank Credit Cards and EMI on Debit/Credit Cards",src:"https://www.kindpng.com/picc/m/488-4884772_apple-macbook-air-13-gold-hd-png-download.png",rating:2},
    {id:5,name:"SanDisk 64GB Extreme PRO SDXC UHS-I Card, 4K UHD, SD Card",substring:["memory","card","SanDisk 64GB Extreme PRO SDXC UHS-I Card, 4K UHD, SD Card"],price:1619,offer:"No Cost EMI on Flipkart Axis Bank Credit Card", src:"https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcSKen8Of_vQy_d210BI4Z29rrcMi79-VBbY9sQo2R6Vo1thmoWdEYv7hT7E9ug&usqp=CAc",rating:5},
    {id:6,name:"Samsung 1.5 Ton 5 Star Split Triple Inverter Dura Series AC - White",substring:["Samsung 1.5 Ton 5 Star Split Triple Inverter Dura Series AC - White"],price:34999,offer:"Flat INR 1750 Instant Discount on HDFC Bank Credit Cards and EMI on Debit/Credit Cards",src:"https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTNqO2Fwzw7_uKi5JdSty6TwWHCBFCAGOS-TXH2MHos09eP2hPlaf6qH_sebKBA73qdq0IVCwY&usqp=CAc",rating:2},
    {id:7,name:"Vivo Y30 (Emerald Black, 128 GB)  (4 GB RAM)",price:13990,substring:["mobile phone","Vivo Y30 (Emerald Black, 128 GB)  (4 GB RAM)"],offer:"Bank Offer5% Unlimited Cashback on Flipkart Axis Bank Credit Card",src:"https://rukminim1.flixcart.com/image/416/416/kc0u7bk0/mobile/q/5/c/vivo-y30-vivo-1938-original-imaft8uktzghgw6f.jpeg?q=70",rating:2},
    {id:8,name:"Redmi 9 Prime (Space Blue, 64 GB)  (4 GB RAM)",price:9999,substring:["mobile phone","Redmi 9 Prime (Space Blue, 64 GB)  (4 GB RAM)"],offer:"No Cost EMI on Flipkart Axis Bank Credit Card", src:"https://rukminim1.flixcart.com/image/416/416/ke1pnrk0/mobile/h/f/2/mi-redmi-9-prime-m2004j191-original-imafutb5637bes8y.jpeg?q=70",rating:3},
    {id:9,name:"Apple iPhone 12 (Green, 64 GB)",price:79900,substring:["mobile phone","Apple iPhone 12 (Green, 64 GB)"],offer:"Bank Offer5% Unlimited Cashback on Flipkart Axis Bank Credit Card",src:"https://rukminim1.flixcart.com/image/416/416/kg8avm80/mobile/p/f/w/apple-iphone-12-dummyapplefsn-original-imafwg8dqjuq8sug.jpeg?q=70",rating:1},
    {id:10,name:"Flipkart SmartBuy 2A Fast Power Charger with Charge & Sync USB Cable  (White, Cable Included)",substring:["Flipkart SmartBuy 2A Fast Power Charger with Charge & Sync USB Cable  (White, Cable Included)"],price:299,offer:"Bank Offer10% off on HDFC Bank Credit Cards and Credit/Debit EMI Transactions, up to ₹1500. On Orders of ₹5000",src:"https://rukminim1.flixcart.com/image/416/416/jwuzzww0/battery-charger/portable-charger/h/g/x/flipkart-smartbuy-ec122m-original-imafhgbpzatmyhq8.jpeg?q=70",rating:5},
    {id:11,name:"Webilla Micro Charger Fast Charger. 5 W 3.1 A",substring:["Webilla Micro Charger Fast Charger. 5 W 3.1 A"],price:199,offer:"No Cost EMI on Flipkart Axis Bank Credit Card", src:"https://rukminim1.flixcart.com/image/416/416/k0tw13k0/mobile-accessories-combo/2/v/e/wall-charger-accessory-combo-for-mi-y2-32gb-2-webilla-original-imafk7eh2anyebab.jpeg?q=70",rating:4},
   
  
  ]

  
sorted(min:number,max:number,rating:number){
  console.log("hii");
this.sort_max=max;
this.sort_min=min;
this.rating=rating;
console.log(max);
this.setMinMax();

}
private bs=new BehaviorSubject<any>('');

 obs=this.bs.asObservable()
 setMinMax(){
this.bs.next("change");

 }
  


 fun(searchString:any):void{
  this.searchString=searchString;
  this.setMinMax();
}

addcart(name:any,src:any,price:any){
  this.cartvalue=this.cartvalue+1;
  this.total=this.total+price;
  // this.name.push(name,src,price);
  let cartElement={name:name,imagePath:src,price:price}
  this.name.push(cartElement);
  this.setMinMax();
}
delcart(i:any){
  this.total=this.total-this.name[i].price;
  this.cartvalue=this.cartvalue-1;
  // delete this.name[i];
  
  this.name.splice(i,1);
  
  // console.log(this.name[i].price);
  this.setMinMax();
}
}

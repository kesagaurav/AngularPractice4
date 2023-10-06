import { Component } from '@angular/core';

@Component({
  selector: 'app-pipes-demo',
  templateUrl: './pipes-demo.component.html',
  styleUrls: ['./pipes-demo.component.css']
})
export class PipesDemoComponent {
name="gaurav";
name2="DEEPA";
title = 'product details';
  productCode = 'PROD_P001';
  productName = 'Apple MPTT2 MacBook Pro';
  price = 217021;

  btnCadBorder!:string;
  btnUsdBorder!:string;
  productPrice!:boolean;
  btnUsd(){
this.btnUsdBorder='3px solid #21963';
this.btnCadBorder="";
this.productPrice=true;
  }

  btnCad(){
    this.btnCadBorder='3px solid #21963';
this.btnUsdBorder="";
this.productPrice=false;
  }

  sortoption: string = '';
  productsList: any = [
    { productName: 'Samsung J7', price: 18000 },
    { productName: 'Apple iPhone 6S', price: 60000 },
    { productName: 'Lenovo K5 Note', price: 10000 },
    { productName: 'Nokia 6', price: 15000 },
    { productName: 'Vivo V5 Plus', price: 26000 },
  ];
  firstName="gaurav";
  lastName="kesa";
}

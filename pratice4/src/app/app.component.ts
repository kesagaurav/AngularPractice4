import { Component } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  title = 'welcome gaurav to the world of angular';
  isValid: 'blue' = "blue";

  gaurav = 'product details';
  productCode = 'PROD_P001';
  productName = 'Laptop';
  changeName(){
    this.title="gaurav"
  }

  productCode1='p001';
  productName1='apple macbook pro';
  productPrice='217,00.21';

}

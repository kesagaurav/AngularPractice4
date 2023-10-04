import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormControl, FormGroup, Validators } from '@angular/forms';

@Component({
  selector: 'app-offer-ride-component',
  templateUrl: './offer-ride-component.component.html',
  styleUrls: ['./offer-ride-component.component.css']
})
export class OfferRideComponentComponent implements OnInit{

  regitsterRide!:FormGroup;
  constructor(private fb:FormBuilder) {

  }
  ngOnInit(): void {
    this.regitsterRide=this.fb.group({
      Name:['',[Validators.required]],
      StartLocation:['',[Validators.required]],
      Destination:['',[Validators.required]],
      Car:['',[Validators.required]],
      SeatsAvaible:['',[Validators.required,this.verifySeats]]
    })
  }

verifySeats(c:FormControl):any{
  let val=/^[0-8]{1}$/
  val.test(c.value)? null :{
    seatsisInvalid:{
      message:'seats should be greater than 0 and less than 8'
    }
  }
}


}

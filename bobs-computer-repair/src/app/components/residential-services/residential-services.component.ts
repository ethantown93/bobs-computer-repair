/*
============================================
; Author: Ethan Townsend
; Date:   8/12/2019
; Description: web-425
;===========================================
*/

import { Component, OnInit, EventEmitter, Input } from '@angular/core';

import { Services } from '../../models/Services';

import { RepairServicesService } from '../../services/repair-services.service'


@Component({
  selector: 'app-residential-services',
  templateUrl: './residential-services.component.html',
  styleUrls: ['./residential-services.component.css']
})
export class ResidentialServicesComponent implements OnInit {

  messageInfo = {
    firstName: '',
    lastName: '',
    address: '',
  }

  manualHours: any = 0;

  services: Services[];
  cart: Array<object> = [];
  cartTotal: Array<number> = [];
  sum: number = 0;
  invoiceTotal: any;

  constructor(private repairServices: RepairServicesService) {  }

  ngOnInit() {

    this.services = this.repairServices.getAll()
  }

  moveToCart(service) {
    this.cart.push(service);
  }

  removeFromCart(name) {
    for (let i = 0; i < this.cart.length; i++) {
      if (this.cart[i]['name'] == name) {
        this.cart.splice(i,1);
      }
    }
    
  }

  removeFromTotal(price) {
    for (let i = 0; i < this.cart.length; i++) {
      if (this.cartTotal[i]) {
        this.cartTotal.splice(i);
      }
  }
}

  tallyTotal() {
    if(this.cart.length == undefined || this.cart.length == 0) {
      this.cartTotal = [];} 
      
    for (let i = 0; i < this.cart.length; i++) {
      this.cartTotal.push(this.cart[i]['price']);
    }
    console.log(this.cartTotal);
  }

  totalPrice(){
    let sum = 0;
    for ( let i = 0; i < this.cartTotal.length; i++) {
      sum += this.cartTotal[i];
    }
    this.sum = sum

    this.invoiceTotal = this.sum + this.manualHours;
  }


  totalHours(hours) {
    this.manualHours = hours * 50;
    console.log(this.manualHours);
  }

  removeHours() {
    this.manualHours = 0;
    this.invoiceTotal = this.sum;
    
  }

  onSubmit(event: any) {
    console.log(event);
    alert('Hello ' + this.messageInfo.firstName + ' ' + this.messageInfo.lastName + ', we\'ve received your order' + '. One of the members from our sales staff will be in touch with you shortly to schedule an appointment.');
    event.resetForm();
  }
}

/*
============================================
; Author: Ethan Townsend
; Date:   8/12/2019
; Description: web-425
;===========================================
*/

import { Injectable, EventEmitter } from '@angular/core';

import { Observable, of } from 'rxjs';

import { Services } from '../models/Services';
import { ShopServicesComponent } from '../components/shop-services/shop-services.component';


@Injectable()

export class RepairServicesService {

  private services: Services[] = [ 
      {
        id: "1",
        name: 'Password Reset',
        price: 39
      },
      {
        id: "2",
        name: 'Spyware Removal',
        price: 99
      },
      {
        id: "3",
        name: 'RAM Upgrade',
        price: 129
      },
      {
        id: "4",
        name: 'Software Instillation',
        price: 49
      },
      {
        id: "5",
        name: 'Tune-Up',
        price: 89
      },
      {
        id: "6",
        name: 'Keyboard Cleaning',
        price: 45
      },
      {
        id: "7",
        name: 'Disk Cleanup',
        price: 149
      }
  ]

  constructor() {

  }

  ngOnInit() {
    
  }

  getAll() {
    return this.services.slice();
  }

}


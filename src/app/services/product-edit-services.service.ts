import { Injectable } from '@angular/core';

import {
  AngularFireDatabase,
  AngularFireList,
  AngularFireObject,
} from '@angular/fire/database';

import { AngularFirestore } from '@angular/fire/firestore';

@Injectable({
  providedIn: 'root',
})
export class ProductEditServicesService {
  collectionName = 'editions';

  constructor(private db: AngularFirestore) {}

  /* getList() {
    this.editionListRef = this.db.list('');
    return this.editionListRef;
  } */

  getList2() {
    return this.db.collection(this.collectionName).snapshotChanges();
  }

  // Create
  /* create(id, apt: any) {
    return this.editionListRef.push({
      id: id,
      denomination: apt.denomination,
      quantity: apt.quantity,
      mobile: apt.nutriscore,
    });
  } */

  create2(id, apt: any) {
    return this.db.collection(this.collectionName).add({
      id: id,
      denomination: apt.denomination,
      quantity: apt.quantity,
      nutriscore: apt.nutriscore,
    });
  }
}

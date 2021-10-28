import { Injectable } from '@angular/core';
import { AngularFirestore, AngularFirestoreCollection, AngularFirestoreDocument } from '@angular/fire/compat/firestore'
import { Business } from '../types/business';
import { Observable } from 'rxjs';
import { map } from 'rxjs/operators';

@Injectable({
  providedIn: 'root'
})

export class BusinessModelService {

  private businessesCollection: AngularFirestoreCollection<Business>;
  businesses: Observable<Business[]>

  constructor(private afs: AngularFirestore) {
    this.businessesCollection = afs.collection<Business>('businesses');
    this.businesses = this.afs.collection('businesses').snapshotChanges().pipe(map(changes => {
      return changes.map(a => {
        const data = a.payload.doc.data() as Business;
        // add id to the data
        data.id = a.payload.doc.id;
        return data;
      })
    }));
   }

  

  getItems() {
    return this.businesses;
  }

  addBusiness(business: Business) {
    this.afs.collection('businesses').add(business)
  }

  
}



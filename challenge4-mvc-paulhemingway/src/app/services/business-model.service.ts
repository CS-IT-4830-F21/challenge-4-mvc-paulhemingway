import { Injectable } from '@angular/core';
import { AngularFirestore, AngularFirestoreCollection, AngularFirestoreDocument } from '@angular/fire/compat/firestore'
import { Business } from '../types/business';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})

export class BusinessModelService {

  private citiesCollection: AngularFirestoreCollection<Business>;
  cities: Observable<Business[]>

  constructor(private afs: AngularFirestore) {
    this.citiesCollection = afs.collection<Business>('businesses');
    this.cities = this.citiesCollection.valueChanges()
   }

  

  getItems() {
    return this.citiesCollection.valueChanges()
  }

  
}



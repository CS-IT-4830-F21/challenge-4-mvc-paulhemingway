import { Injectable } from '@angular/core';
import { AngularFirestore, AngularFirestoreCollection, AngularFirestoreDocument } from '@angular/fire/compat/firestore'
import { Review } from '../types/review';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})

export class ReviewModelService {

  private citiesCollection: AngularFirestoreCollection<Review>;
  cities: Observable<Review[]>

  constructor(private afs: AngularFirestore) {
    this.citiesCollection = afs.collection<Review>('reviews');
    this.cities = this.citiesCollection.valueChanges()
   }

  

  getItems() {
    return this.citiesCollection.valueChanges()
  }

  
}



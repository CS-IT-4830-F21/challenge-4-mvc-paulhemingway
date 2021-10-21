import { Injectable } from '@angular/core';
import { AngularFirestore, AngularFirestoreCollection, AngularFirestoreDocument } from '@angular/fire/compat/firestore'
import { City } from '../types/city';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})

export class CityModelService {

  private citiesCollection: AngularFirestoreCollection<City>;
  cities: Observable<City[]>

  constructor(private afs: AngularFirestore) {
    this.citiesCollection = afs.collection<City>('cities');
    this.cities = this.citiesCollection.valueChanges()
   }

  

  getItems() {
    return this.citiesCollection.valueChanges()
  }

  
}



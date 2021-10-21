import { Injectable } from '@angular/core';
import { AngularFirestore, AngularFirestoreCollection, AngularFirestoreDocument } from '@angular/fire/compat/firestore'
import { City } from '../types/city';
import { Observable } from 'rxjs';
import { map } from 'rxjs/operators';

@Injectable({
  providedIn: 'root'
})

export class CityModelService {

  citiesCollection: AngularFirestoreCollection<City>;
  cities: Observable<City[]>

  constructor(public afs: AngularFirestore) {
    this.citiesCollection = afs.collection<City>('cities');

    //this.cities = this.citiesCollection.valueChanges();
    
    this.cities = this.afs.collection('cities').snapshotChanges().pipe(map(changes => {
      return changes.map(a => {
        const data = a.payload.doc.data() as City;
        data.id = a.payload.doc.id;
        return data;
      })
    }));
   }

  

  getItems() {
    return this.cities;
  }

  
}



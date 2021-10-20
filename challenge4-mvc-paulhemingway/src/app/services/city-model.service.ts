import { Injectable } from '@angular/core';
import { AngularFirestore } from '@angular/fire/compat/firestore'

@Injectable({
  providedIn: 'root'
})
export class CityModelService {

  constructor(private afs: AngularFirestore) { }

  getItems() {
    return this.afs.collection("test").get();
  }
}

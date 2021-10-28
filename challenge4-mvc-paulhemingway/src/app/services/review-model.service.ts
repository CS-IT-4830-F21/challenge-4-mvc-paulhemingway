import { Injectable } from '@angular/core';
import { AngularFirestore, AngularFirestoreCollection, AngularFirestoreDocument } from '@angular/fire/compat/firestore'
import { Review } from '../types/review';
import { Observable } from 'rxjs';
import { map } from 'rxjs/operators';

@Injectable({
  providedIn: 'root'
})

export class ReviewModelService {

  reviewsCollection: AngularFirestoreCollection<Review>;
  reviews: Observable<Review[]>
  reviewDoc: AngularFirestoreDocument<Review> | undefined

  constructor(private afs: AngularFirestore) {
    this.reviewsCollection = afs.collection<Review>('reviews');
    this.reviews = this.afs.collection('reviews').snapshotChanges().pipe(map(changes => {
      return changes.map(a => {
        const data = a.payload.doc.data() as Review;
        data.id = a.payload.doc.id;
        return data;
      })
    }));
   }

  getItems() {
    return this.reviews;
  }

  deleteReview(review: Review) {
    this.reviewDoc = this.afs.doc(`reviews/${review.id}`);
    this.reviewDoc.delete();
  }
}



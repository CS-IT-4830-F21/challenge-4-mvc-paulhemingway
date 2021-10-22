import { Component, OnInit } from '@angular/core';
import { ReviewModelService } from 'src/app/services/review-model.service';
import { Review } from 'src/app/types/review';

import { Observable } from 'rxjs';

import { ActivatedRoute } from '@angular/router';
import { AngularFirestore, AngularFirestoreCollection } from '@angular/fire/compat/firestore';

@Component({
  selector: 'app-reviews',
  templateUrl: './reviews.component.html',
  styleUrls: ['./reviews.component.css']
})
export class ReviewsComponent implements OnInit {
  reviews!: Review[]

  matchedReviews!: Observable<Review>

  i = 0;
  businessNameFromRoute!: String;
  reviewCount = 0;
  filledStars: Number[] = []
  emptyStars: Number[] = []

  constructor(
    private afs: ReviewModelService,
    private route: ActivatedRoute,
    private mrafs: AngularFirestore
    ) {
      
     }

  ngOnInit(): void {
    const routeParams = this.route.snapshot.paramMap;
    this.businessNameFromRoute = String(routeParams.get('business.businessName'));

    

    this.afs.getItems().subscribe(data => {
      
      this.reviews = data;
      //console.log(this.reviews)

      for (this.i; this.i < this.reviews.length; this.i++){
        if (this.reviews[this.i].businessName == this.businessNameFromRoute){
          this.reviewCount++;
          this.filledStars[this.i] = Number(this.reviews[this.i].rating)
          this.emptyStars[this.i] = Number(5 - this.reviews[this.i].rating!)
        }
      }

      console.log(this.filledStars);
      console.log(this.emptyStars);

      
    });
  }

  delete(review: Review){
    this.afs.deleteReview(review);
  }
  

}
 
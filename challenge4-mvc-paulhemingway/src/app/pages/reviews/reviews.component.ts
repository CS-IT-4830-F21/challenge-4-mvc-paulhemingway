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

  matchedReviews: Review[] = []

  i = 0;
  businessNameFromRoute!: String;
  reviewCount = 0;
  filledStars: Number[] = []
  emptyStars: Number[] = []

  constructor(private afs: ReviewModelService, private route: ActivatedRoute) {}

  ngOnInit(): void {
    const routeParams = this.route.snapshot.paramMap;
    this.businessNameFromRoute = String(routeParams.get('business.businessName'));

    

    this.afs.getItems().subscribe(data => {
      
      this.reviews = data;

      for (this.i; this.i < this.reviews.length; this.i++){
        if (this.reviews[this.i].businessName == this.businessNameFromRoute){
          this.reviewCount++;
          this.matchedReviews.push(this.reviews[this.i])
        }
      }

      for(let x = 0; x < this.matchedReviews.length; x++){
        if (this.matchedReviews[x].rating){
          this.filledStars[x] = Number(this.matchedReviews[x].rating)
          this.emptyStars[x] = Number(5 - this.matchedReviews[x].rating!)
        } 
      }      
    });
  }

  delete(review: Review){
    this.afs.deleteReview(review);
  }
  

}
 
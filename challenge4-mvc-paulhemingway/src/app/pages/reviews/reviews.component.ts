import { Component, OnInit } from '@angular/core';
import { ReviewModelService } from 'src/app/services/review-model.service';
import { Review } from 'src/app/types/review';

import { ActivatedRoute } from '@angular/router';

@Component({
  selector: 'app-reviews',
  templateUrl: './reviews.component.html',
  styleUrls: ['./reviews.component.css']
})
export class ReviewsComponent implements OnInit {
  reviews!: Review[]
  items = [];
  i = 0;
  businessNameFromRoute!: String;
  reviewCount = 0;

  constructor(
    private afs: ReviewModelService,
    private route: ActivatedRoute
    ) { }

  ngOnInit(): void {
    const routeParams = this.route.snapshot.paramMap;
    this.businessNameFromRoute = String(routeParams.get('business.businessName'));

    this.afs.getItems().subscribe(data => {
      
      this.reviews = data;
      //console.log(this.reviews)

      for (this.i; this.i < this.reviews.length; this.i++){
        if (this.reviews[this.i].businessName == this.businessNameFromRoute){
          this.reviewCount++;
        }
      }   
    });
  }

  delete(review: Review){
    this.afs.deleteReview(review);
  }
  

}
 
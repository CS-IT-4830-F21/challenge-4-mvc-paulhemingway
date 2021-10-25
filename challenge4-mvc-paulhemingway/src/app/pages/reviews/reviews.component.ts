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
  reviews: Review[] = []
  businessNameFromRoute: String = '';
  reviewCount = 0;
  filledStars: Number[] = []
  emptyStars: Number[] = []

  constructor(private afs: ReviewModelService, private route: ActivatedRoute) {}

  ngOnInit(): void {
    const routeParams = this.route.snapshot.paramMap;
    this.businessNameFromRoute = String(routeParams.get('business.businessName'));

    this.afs.getItems().subscribe(data => {
      for (let i = 0; i < data.length; i++){
        if (data[i].businessName == this.businessNameFromRoute){
          this.reviewCount++;
          this.reviews.push(data[i])
        }
      }

      for(let x = 0; x < this.reviews.length; x++){
        if (this.reviews[x].rating){
          this.filledStars[x] = Number(this.reviews[x].rating)
          this.emptyStars[x] = Number(5 - this.reviews[x].rating!)
        } 
      }      
    });
  }

  delete(review: Review){
    this.afs.deleteReview(review);
  }
}
 
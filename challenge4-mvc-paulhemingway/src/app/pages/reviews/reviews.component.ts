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
  matchedReviews: Review[] = []
  businessNameFromRoute: String = '';
  cityNameFromRoute: String = '';
  reviewCount = 0;
  filledStars: Number[] = []
  emptyStars: Number[] = []

  constructor(private afs: ReviewModelService, private route: ActivatedRoute) {}

  ngOnInit(): void {
    const routeParams = this.route.snapshot.paramMap;
    this.businessNameFromRoute = String(routeParams.get('business.businessName'));
    this.cityNameFromRoute = String(routeParams.get('city.name'));

    this.afs.getItems().subscribe(data => {
      // every time there's a change in data, empty the matchedReviews array to prevent it all from duplicating on the screen
        this.matchedReviews = []
         this.reviews = data;

         for (let i = 0; i < this.reviews.length; i++){
          if (this.reviews[i].businessName == this.businessNameFromRoute){
            this.reviewCount++;
            this.matchedReviews.push(this.reviews[i])
          }
        }
    
          // create arrays for filled/empty stars to be matched in the html based on the current review index
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
    window.alert(review.author + "'s review was successfully deleted.")
  }
}
 
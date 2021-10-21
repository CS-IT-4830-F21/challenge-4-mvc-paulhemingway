import { Component, OnInit } from '@angular/core';
import { ReviewModelService } from 'src/app/services/review-model.service';

@Component({
  selector: 'app-reviews',
  templateUrl: './reviews.component.html',
  styleUrls: ['./reviews.component.css']
})
export class ReviewsComponent implements OnInit {

  items = [];
  i = 0;

  constructor(private afs: ReviewModelService) { }

  ngOnInit(): void {

    this.afs.getItems().subscribe(data => {
      
      for (this.i;this.i<data.length;this.i++){
        console.log(data.length)
        console.log(data[this.i].body)
      } 
      
    });

  }

}
 
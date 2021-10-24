import { Component, OnInit } from '@angular/core';
import { FormsModule } from '@angular/forms';

@Component({
  selector: 'app-add-review',
  templateUrl: './add-review.component.html',
  styleUrls: ['./add-review.component.css']
})
export class AddReviewComponent implements OnInit {

  stars!: String;
  defaultStars!: String;

  constructor() { }

  ngOnInit(): void {
    this.stars = '<i class="fas fa-star"></i><i class="fas fa-star"></i><i class="fas fa-star"></i><i class="fas fa-star"></i><i class="fas fa-star"></i>'
  }

  OnChange(value: String) {
   this.stars = ''
   const number = Number(value)

   for (let i = 0; i < number; i++){
    this.stars = this.stars + '<i class="fas fa-star"></i>'
   }

   for (let i = 0; i < 5-number; i++){
    this.stars = this.stars + '<i class="far fa-star"></i>'
   }
  }
  
}



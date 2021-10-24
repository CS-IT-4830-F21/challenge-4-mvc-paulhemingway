import { Component, OnInit } from '@angular/core';
import { FormsModule } from '@angular/forms';

@Component({
  selector: 'app-add-review',
  templateUrl: './add-review.component.html',
  styleUrls: ['./add-review.component.css']
})
export class AddReviewComponent implements OnInit {

  stars!: String;
  constructor() { }

  ngOnInit(): void {
  }

  OnChange(value: String) {
   this.stars = ''
   const number = Number(value)

   for (let i = 0; i < number; i++){
    this.stars = this.stars + '<i class="bi bi-star-fill"></i>'
   }

   for (let i = 0; i < 5-number; i++){
    this.stars = this.stars + '<i class="bi bi-star"></i>'
   }
  }
  
}



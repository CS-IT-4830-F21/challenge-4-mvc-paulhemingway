import { Component, OnInit } from '@angular/core';
import { AngularFirestore } from '@angular/fire/compat/firestore';
import { FormControl, FormGroup, FormsModule, Validators } from '@angular/forms';

import { City } from 'src/app/types/city';
import { Business } from 'src/app/types/business';

import { CityModelService } from 'src/app/services/city-model.service';
import { BusinessModelService } from 'src/app/services/business-model.service';
import { ReviewModelService } from 'src/app/services/review-model.service';

@Component({
  selector: 'app-add-review',
  templateUrl: './add-review.component.html',
  styleUrls: ['./add-review.component.css']
})
export class AddReviewComponent implements OnInit {

  stars!: String;
  defaultStars!: String;

  reviewForm: FormGroup;
  citySubmit: City = {}
  businessSubmit: Business = {};

  businesses: Business[] = [];
  cities: City[] = [];

  constructor(
    private database: AngularFirestore,
    private cafs: CityModelService,
    private bafs: BusinessModelService,
    private reviewService: ReviewModelService
    ) {
    this.reviewForm = new FormGroup( {
      'author': new FormControl(null, [Validators.required]),
      'body': new FormControl(null, [Validators.required]),
      'listOfServices': new FormControl(null, [Validators.required]),
      'businessName': new FormControl(null, [Validators.required]),
      'cityName': new FormControl(null, [Validators.required]),
      'rating': new FormControl(3),
    })
   }

  ngOnInit(): void {
    this.stars = '<i class="fas fa-star"></i><i class="fas fa-star"></i><i class="fas fa-star"></i><i class="far fa-star"></i><i class="far fa-star"></i>'    
  }

  OnSubmit() {
    let reviewFormRaw = this.reviewForm.getRawValue()

    // get all information needed to submit to all 3 databases
    let cityName = reviewFormRaw.cityName;
    let businessName = reviewFormRaw.businessName;
    let listOfServices = reviewFormRaw.listOfServices;

    this.citySubmit.name = cityName
    this.businessSubmit.businessName = businessName
    this.businessSubmit.cityName = cityName
    this.businessSubmit.listOfServices = listOfServices
    
    // add review to database
    this.reviewService.addReview(this.reviewForm.getRawValue())

    this.cafs.getItems().subscribe(data => {
      let duplicate = false
      // if the city is not already in the database, add a document
      for (let i = 0; i<data.length; i++) {
        if (data[i].name == cityName){
          duplicate = true
        }
      }
      if(duplicate == false){
        this.cafs.addCity(this.citySubmit)
      }

    })
    this.bafs.getItems().subscribe(data => {
      let duplicate = false
      // if the business is not already in the database, add a document
      for (let i = 0; i<data.length; i++) {
        if (data[i].businessName == businessName && data[i].cityName == cityName){
          duplicate = true
        }
      }
      if(duplicate == false){
        this.bafs.addBusiness(this.businessSubmit)
      }
    })

    window.alert("Your review was successfully submitted!")
    // clear the form after submission
    this.reviewForm.reset()
  }

  OnChange(value: String) {
   this.stars = ''
   const number = Number(value)

  // add filled stars based on the rating
   for (let i = 0; i < number; i++){
    this.stars = this.stars + '<i class="fas fa-star"></i>'
   }

  // add outlined stars if the rating is not 5
   for (let i = 0; i < 5-number; i++){
    this.stars = this.stars + '<i class="far fa-star"></i>'
   }
  }
  
}



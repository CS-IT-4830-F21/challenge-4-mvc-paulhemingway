import { Component, OnInit } from '@angular/core';
import { AngularFirestore } from '@angular/fire/compat/firestore';
import { FormControl, FormGroup, FormsModule } from '@angular/forms';

import { City } from 'src/app/types/city';
import { Business } from 'src/app/types/business';

import { CityModelService } from 'src/app/services/city-model.service';
import { BusinessModelService } from 'src/app/services/business-model.service';

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
    private bafs: BusinessModelService
    ) {
    this.reviewForm = new FormGroup( {
      'author': new FormControl(null),
      'body': new FormControl(null),
      'listOfServices': new FormControl(null),
      'businessName': new FormControl(null),
      'cityName': new FormControl(null),
      'rating': new FormControl(3),
    })
   }

  ngOnInit(): void {
    this.stars = '<i class="fas fa-star"></i><i class="fas fa-star"></i><i class="fas fa-star"></i><i class="far fa-star"></i><i class="far fa-star"></i>'
    

    
  }

  OnSubmit() {
    let reviewFormRaw = this.reviewForm.getRawValue()

    let cityName = reviewFormRaw.cityName;
    let businessName = reviewFormRaw.businessName;
    let listOfServices = reviewFormRaw.listOfServices;

    this.citySubmit.name = cityName
    this.businessSubmit.businessName = businessName
    this.businessSubmit.cityName = cityName
    this.businessSubmit.listOfServices = listOfServices
    
    //this.database.collection('reviews').add(this.reviewForm.getRawValue())

    this.cafs.getItems().subscribe(data => {
      let duplicate = false
      for (let i = 0; i<data.length; i++) {
        if (data[i].name == cityName){
          duplicate = true
        }
      }
      if(duplicate == false){
        this.database.collection('cities').add(this.citySubmit)
      }

    })
    this.bafs.getItems().subscribe(data => {
      let duplicate = false
      for (let i = 0; i<data.length; i++) {
        if (data[i].businessName == businessName && data[i].cityName == cityName){
          duplicate = true
        }
      }
      if(duplicate == false){
        this.database.collection('businesses').add(this.businessSubmit)
      }
    })
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



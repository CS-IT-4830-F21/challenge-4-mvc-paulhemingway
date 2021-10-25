import { Component, OnInit } from '@angular/core';
import { BusinessModelService } from 'src/app/services/business-model.service';
import { Business } from 'src/app/types/business';

import { ReviewModelService } from 'src/app/services/review-model.service';
import { Review } from 'src/app/types/review';

import { ActivatedRoute } from '@angular/router';

@Component({
  selector: 'app-businesses',
  templateUrl: './businesses.component.html',
  styleUrls: ['./businesses.component.css']
})
export class BusinessesComponent implements OnInit {
  businesses!: Business[];
  reviews!: Review[];
  matchedBusinesses: Business[] = []
  items = [];
  i = 0;
  cityNameFromRoute!: String;
  businessCount = 0;

  constructor(
    private afs: BusinessModelService, 
    private rafs: ReviewModelService,
    private route: ActivatedRoute
    ) { }

  ngOnInit(): void {

    const routeParams = this.route.snapshot.paramMap;
    this.cityNameFromRoute = String(routeParams.get('city.name'));


    this.afs.getItems().subscribe(data => {

      this.businesses = data;

      for (this.i; this.i < this.businesses?.length; this.i++){
        if (this.businesses[this.i].cityName == this.cityNameFromRoute){
          this.businessCount++;
          this.matchedBusinesses.push(this.businesses[this.i])
        }
      }

      console.log(this.businessCount)

      
    });

    this.rafs.getItems().subscribe(data => {
      this.reviews = data;
    })

  }

}
 
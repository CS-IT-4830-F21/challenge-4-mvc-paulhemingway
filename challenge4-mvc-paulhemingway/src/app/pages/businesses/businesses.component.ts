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
  items = [];
  i = 0;
  cityNameFromRoute!: String;

  constructor(
    private afs: BusinessModelService, 
    private rafs: ReviewModelService,
    private route: ActivatedRoute
    ) { }

  ngOnInit(): void {

    const routeParams = this.route.snapshot.paramMap;
    this.cityNameFromRoute = String(routeParams.get('city.name'));


    console.log(this.cityNameFromRoute)

    this.afs.getItems().subscribe(data => {
      
      //console.log(data[0].id);
      this.businesses = data;
      
    });

    this.rafs.getItems().subscribe(data => {
      this.reviews = data;

      //console.log(this.reviews)
    })

  }

}
 
import { Component, OnInit } from '@angular/core';
import { BusinessModelService } from 'src/app/services/business-model.service';
import { Business } from 'src/app/types/business';

import { ActivatedRoute } from '@angular/router';

@Component({
  selector: 'app-businesses',
  templateUrl: './businesses.component.html',
  styleUrls: ['./businesses.component.css']
})
export class BusinessesComponent implements OnInit {
  businesses: Business[] = [];
  cityNameFromRoute: String = '';
  businessCount = 0;

  constructor(
    private afs: BusinessModelService, 
    private route: ActivatedRoute
    ) { }

  ngOnInit(): void {

    // get the city name from the route
    const routeParams = this.route.snapshot.paramMap;
    this.cityNameFromRoute = String(routeParams.get('city.name'));

    this.afs.getItems().subscribe(data => {
      this.businesses = []

      // loop through all businesses, and push those to the array that match the city name. also add to the count
      for (let i = 0; i < data?.length; i++){
        if (data[i].cityName == this.cityNameFromRoute){
          this.businessCount++;
          this.businesses.push(data[i])
        }
      }
    });
  }
}
 
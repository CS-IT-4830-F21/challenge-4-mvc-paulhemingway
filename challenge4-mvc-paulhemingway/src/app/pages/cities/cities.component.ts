import { Component, OnInit } from '@angular/core';
import { CityModelService } from 'src/app/services/city-model.service';
import { City } from 'src/app/types/city';

import { BusinessModelService } from 'src/app/services/business-model.service';
import { Business } from 'src/app/types/business';

@Component({
  selector: 'app-cities',
  templateUrl: './cities.component.html',
  styleUrls: ['./cities.component.css']
})
export class CitiesComponent implements OnInit {
  cities!: City[];
  businesses!: Business[];
  i = 0;

  constructor(private afs: CityModelService, private bafs: BusinessModelService) { }

  ngOnInit(): void {

    this.afs.getItems().subscribe(data => {
      
      console.log(data[0].id);
      this.cities = data;
      
    });

    this.bafs.getItems().subscribe(data => {
      this.businesses = data;

      console.log(this.businesses)
    })

    

  }

}

import { Component, OnInit } from '@angular/core';
import { CityModelService } from 'src/app/services/city-model.service';
import { City } from 'src/app/types/city';

@Component({
  selector: 'app-cities',
  templateUrl: './cities.component.html',
  styleUrls: ['./cities.component.css']
})
export class CitiesComponent implements OnInit {
  cities: City[] = [];
  cityCount = 0;

  constructor(private afs: CityModelService) { }

  ngOnInit(): void {

    // collect city data, and get count based on length
    this.afs.getItems().subscribe(data => {
      this.cities = data;
      this.cityCount = this.cities.length
    });
  }
}

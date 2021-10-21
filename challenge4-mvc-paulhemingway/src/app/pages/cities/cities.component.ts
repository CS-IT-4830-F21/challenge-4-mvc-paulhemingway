import { Component, OnInit } from '@angular/core';
import { CityModelService } from 'src/app/services/city-model.service';
import { City } from 'src/app/types/city';

@Component({
  selector: 'app-cities',
  templateUrl: './cities.component.html',
  styleUrls: ['./cities.component.css']
})
export class CitiesComponent implements OnInit {
  cities!: City[];
  i = 0;

  constructor(private afs: CityModelService) { }

  ngOnInit(): void {

    this.afs.getItems().subscribe(data => {
      
      console.log(data);
      this.cities = data;
      
    });

  }

}

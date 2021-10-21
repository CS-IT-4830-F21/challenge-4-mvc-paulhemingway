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
  cityCount = 0;

  constructor(private afs: CityModelService) { }

  ngOnInit(): void {

    this.afs.getItems().subscribe(data => {
      
      //console.log(data[0].id);
      this.cities = data;
      this.cityCount = this.cities.length

      //console.log(this.cities)

    });


    

  }

}

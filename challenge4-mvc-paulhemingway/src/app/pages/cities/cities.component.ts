import { Component, OnInit } from '@angular/core';
import { CityModelService } from 'src/app/services/city-model.service';

@Component({
  selector: 'app-cities',
  templateUrl: './cities.component.html',
  styleUrls: ['./cities.component.css']
})
export class CitiesComponent implements OnInit {
  items = [];

  constructor(private afs: CityModelService) { }

  ngOnInit(): void {

    this.afs.getItems().subscribe(data => {
      console.log(data[0].city)
    });

  }

}

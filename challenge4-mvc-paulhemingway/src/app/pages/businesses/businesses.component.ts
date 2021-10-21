import { Component, OnInit } from '@angular/core';
import { BusinessModelService } from 'src/app/services/business-model.service';

@Component({
  selector: 'app-businesses',
  templateUrl: './businesses.component.html',
  styleUrls: ['./businesses.component.css']
})
export class BusinessesComponent implements OnInit {

  items = [];
  i = 0;

  constructor(private afs: BusinessModelService) { }

  ngOnInit(): void {

    this.afs.getItems().subscribe(data => {
      console.log(data.length)
      
      for (this.i;this.i<data.length;this.i++){
        console.log(data[this.i].businessName)
      } 
      
    });

  }

}
 
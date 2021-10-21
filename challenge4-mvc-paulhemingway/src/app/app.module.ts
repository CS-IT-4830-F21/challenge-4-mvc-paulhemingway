import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { RouterModule } from '@angular/router'

import { AppComponent } from './app.component';
import { AngularFireModule } from '@angular/fire/compat';
import { AngularFirestoreModule } from '@angular/fire/compat/firestore'
import { environment } from '../environments/environment';

import { AppRoutingModule } from './app-routing.module';
import { CitiesComponent } from './pages/cities/cities.component';
import { BusinessesComponent } from './pages/businesses/businesses.component';
import { ReviewsComponent } from './pages/reviews/reviews.component';
import { AddReviewComponent } from './pages/add-review/add-review.component'

import { CityModelService  } from './services/city-model.service';

@NgModule({
  declarations: [
    AppComponent,
    CitiesComponent,
    BusinessesComponent,
    ReviewsComponent,
    AddReviewComponent
  ],
  imports: [
    BrowserModule,
    AngularFireModule.initializeApp(environment.firebase, 'challenge-v-mvc-paulhemingway'),
    AppRoutingModule,
    AngularFirestoreModule,
    RouterModule.forRoot([
      {path: 'cities', component: CitiesComponent},
      {path: 'businesses', component: BusinessesComponent},
      {path: 'reviews', component: ReviewsComponent},
    ])
  ],
  providers: [CityModelService],
  bootstrap: [AppComponent]
})
export class AppModule { }

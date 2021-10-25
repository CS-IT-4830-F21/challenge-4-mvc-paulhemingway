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
import { TopBarComponent } from './top-bar/top-bar.component';

import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { BusinessModelService } from './services/business-model.service';
import { ReviewModelService } from './services/review-model.service';

@NgModule({
  declarations: [
    AppComponent,
    CitiesComponent,
    BusinessesComponent,
    ReviewsComponent,
    AddReviewComponent,
    TopBarComponent
  ],
  imports: [
    BrowserModule,
    AngularFireModule.initializeApp(environment.firebase, 'challenge-v-mvc-paulhemingway'),
    AppRoutingModule,
    FormsModule,
    ReactiveFormsModule,
    AngularFirestoreModule,
    RouterModule.forRoot([
      {path: '', component: CitiesComponent},
      {path: 'cities', component: CitiesComponent},
      {path: 'businesses/:city.name', component: BusinessesComponent},
      {path: 'businesses/:city.name/reviews/:business.businessName', component: ReviewsComponent},
      {path: 'addreview', component: AddReviewComponent}
    ])
  ],
  providers: [CityModelService, BusinessModelService, ReviewModelService],
  bootstrap: [AppComponent]
})
export class AppModule { }

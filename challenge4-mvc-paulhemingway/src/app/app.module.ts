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
    AngularFireModule.initializeApp(environment.firebase),
    AppRoutingModule,
    AngularFirestoreModule,
    RouterModule.forRoot([
      {path: 'cities', component: CitiesComponent}
    ])
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }

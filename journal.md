# Journal
Paul Hemingway Challenge 4

Link to running code: https://challenge-4-mvc-paulhemingway.web.app/

### Summary
For this project, I created a web application that lets users add/remove reviews about certain businesses in certain cities. The reviews contain the author, body, and rating. 

Components
1. Cities: displays all the cities listed in the database.
2. Businesses: Displays all the businesses in the specific city that was clicked on. 
3. Reviews: Displays all the reviews of the business that was clicked on. Allows deletion for each review. 
4. Add Review: Allows user to submit their own review using Angular reactive forms.
5. Top Bar: On every page, has a link to the home page as well as a link to add a review.
6. Page not found: Page appears when the URL is unrecognizable.
Services
1. City Model Service: Retrieves the data from the cities firestore collection and sends it to the controller when the getItems() function is called.
2. Busines Model Service: Retrieves the data from the businesses firestore collection and sends it to the controller when the getItems() function is called.
3. Review Model Service: Retrieves the data from the reviews firestore collection and sends it to the controller when the getItems() function is called. Also has a delete function.
Interfaces
1. City: id, name
2. Business: id, businessName, listOfServices
3. Review: id, author, body, rating, cityName, businessName
    
All of this was created using MVC architecture with Angular and Firebase. The model was the services. These services were used to access the data and add to or delete from the database. They used the AngularFirestore module to do these things. The View was the HTML and CSS of the components. The review, business, and city pages got the data from the controller (that got the data from the model) to display for the user to see. The add review page took user input and sent that to the controller to translate and send to the model. The controller was the ts files of the components. It receives the data from the model and send it to the view, and vice versa. It consisted of methods from the model that manipulates the data. 

### MVC vs. Angular's MVC


### Angular Reactive Forms vs. Template Driven Forms


### Resources:
1. Trey Shaw and FengXiang Zhao's lectures on Firebase and Angular
I referenced these lectures multiple times to implement the challenge. They helped with getting Firebase set up and accessing the Firebase through Angular.

2. https://www.youtube.com/watch?v=gUmItHaVL2w&t=1419s
This YouTube tutorial helped a lot as well with creating, reading and deleting reviews.

3. https://github.com/angular/angularfire/blob/master/docs/firestore/documents.md
Helpful documentation on how to access the database.

4. https://stackoverflow.com/questions/36535629/repeat-html-element-multiple-times-using-ngfor-based-on-a-number
Wanted to access the current number of the index while in an \*ngFor loop. This helped with that.

5. https://www.cloudhadoop.com/angular-get-input-value-multiple-ways/
Used this source to get the value from the range slider in the add review page to update the stars accordingly. 

6. https://getbootstrap.com/docs/5.1/getting-started/introduction/
Referred to the bootstrap documentation to set up cards and forms. 

7. https://stackoverflow.com/questions/32062051/how-to-make-submit-button-disabled
Referred to this to disable the submit button when input was invalid.

### Screenshots

Project successfully deployed via Firebase
![pshfmg-deployedToFirebase](https://user-images.githubusercontent.com/60056589/139272778-a4d9e82e-7c8e-4fe1-a735-27c0781c0365.png)

Businesses Firestore collection
![pshfmg-firestoreBusinesses](https://user-images.githubusercontent.com/60056589/139272780-13fddb56-a052-476e-a3f1-ccc489302a91.png)

Cities Firestore collection
![pshfmg-firestoreCities](https://user-images.githubusercontent.com/60056589/139272782-9232f458-e1db-49d7-91f5-82bd5417b2fc.png)

Reviews Firestore collection
![pshfmg-firestoreReviews](https://user-images.githubusercontent.com/60056589/139272784-89f980ae-369b-42c1-93de-96cba4e5fb59.png)

Home page of web application (Cities)
![pshfmg-homepageCities](https://user-images.githubusercontent.com/60056589/139272787-a96be50e-804c-4e77-8fcc-285506ed58c7.png)

Example businesses page. If more reviews are added, they will populate in 3 columns
![pshfmg-businessesPage](https://user-images.githubusercontent.com/60056589/139272789-ec1d4fda-c503-4c55-8f5e-3acc8d49120d.png)

Example reviews page. It shows the stars based on the given rating, and there is a remove button
![pshfmg-reviewsPage](https://user-images.githubusercontent.com/60056589/139272790-9d1883e5-472a-47bc-b6c5-287f6a19d1fe.png)

Add review page. Submit button is disabled until all fields have valid input (not empty)
![pshfmg-addReview](https://user-images.githubusercontent.com/60056589/139272791-8b68d1aa-de89-4378-9add-12c18341ae03.png)

Submitted Dr. Phil's Review
![pshfmg-submittedReview](https://user-images.githubusercontent.com/60056589/139272794-8818e14e-c659-4aad-a712-2b370d12d623.png)

As you can see, it's now added to the page. 
![pshfmg-reviewWasAdded](https://user-images.githubusercontent.com/60056589/139272795-debbc037-6a75-493f-8fa1-a1109311698c.png)

Firestore shows the review is in the database. I'm about to delete it though.
![pshfmg-deleteReview1](https://user-images.githubusercontent.com/60056589/139272798-dc239304-f6b6-436d-83fe-a21a3b03a3af.png)

I deleted the review with the remove button and it removed from the database.
![pshfmg-deleteReview2](https://user-images.githubusercontent.com/60056589/139272799-86636a49-e83c-4761-ba62-8a79915e8b0d.png)

This page shows up when an unknown URL occurs.
![pshfmg-pageNotFound](https://user-images.githubusercontent.com/60056589/139272800-d95d7112-e6db-4674-8eb4-9a3cd9f43aa5.png)

*Code Screenshots

![pshfmg-code1](https://user-images.githubusercontent.com/60056589/139272804-118fa2ba-fe39-4ee8-84f2-491f892a26b2.png)
![pshfmg-code2](https://user-images.githubusercontent.com/60056589/139272806-f0d0978f-37c9-4e1d-9de4-974f6301692a.png)
![pshfmg-code3](https://user-images.githubusercontent.com/60056589/139272811-c1f815c4-a16a-4a97-b103-1d99cd1a159c.png)
![pshfmg-code4](https://user-images.githubusercontent.com/60056589/139272813-2c530046-59e5-4c42-bb58-14ce38f3a9fa.png)
![pshfmg-code5](https://user-images.githubusercontent.com/60056589/139272816-3210db99-2f67-4068-99d5-155f27a902a7.png)
![pshfmg-code6](https://user-images.githubusercontent.com/60056589/139272818-5c71c004-e581-4672-831a-1c247f43af1a.png)
![pshfmg-code7](https://user-images.githubusercontent.com/60056589/139272819-46ceb1d5-f7cc-41fe-a903-bfa2a83a4c9a.png)
![pshfmg-code8](https://user-images.githubusercontent.com/60056589/139272820-3946b61e-697e-4fe6-99c7-9425b1785d25.png)
![pshfmg-code9](https://user-images.githubusercontent.com/60056589/139272822-4bc0f2c1-fc2f-412b-892c-5e2fb921531d.png)
![pshfmg-code10](https://user-images.githubusercontent.com/60056589/139272824-ea82eb08-6974-4895-887f-89b7e6d93b86.png)
![pshfmg-code11](https://user-images.githubusercontent.com/60056589/139272826-255ce3ae-f821-4307-a882-45c1182d1da2.png)
![pshfmg-code12](https://user-images.githubusercontent.com/60056589/139272829-1875c0c1-ec34-49b9-a675-939c116b6ccd.png)
![pshfmg-code13](https://user-images.githubusercontent.com/60056589/139272776-d77401e2-0e22-4d46-9016-75844e0daa23.png)

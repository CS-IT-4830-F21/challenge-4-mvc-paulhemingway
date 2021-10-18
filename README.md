[![Open in Visual Studio Code](https://classroom.github.com/assets/open-in-vscode-f059dc9a6f8d3a56e377f745f24479a46679e63a5d9fe6f495e02850cd0d8118.svg)](https://classroom.github.com/online_ide?assignment_repo_id=6031892&assignment_repo_type=AssignmentRepo)
# Challenge 4: MVC with Angular

## Overview

In this challenge, you will use Angular to make a restaurant review web application. This challenge will help you get familiar with how Model-View-Controller (MVC) is used in Angular. In addition, you will get experience with Angular Reactive Forms, Persistent Client-Side Data Storage, Angular Interface Types, and Angular Services.

## How to Get Started

- Clone this [repo](https://classroom.github.com/a/usKjHr26)
- Run `npm install`
- Create a new development branch
  - Using a branch for each feature could result in a bonus point reward, make sure the TAs know about your extra work by posting a comment on your submission

## Requirements (What will be Graded)

1. Relevant code
2. Journal
3. Screenshots
4. Built code running on server
   - Running code
   - Working URL link using HTTPS
5. Zipped repo and link on Canvas

## Code Requirements

The following are the _minimum required_ pieces you must implement in this application, accompanied by a short description of what they should do.

### Cities Component (Page)

- Display a list of all cities that have reviewed businesses in them
- Display the number of reviewed businesses for each city
- Display the total number of reviewed businesses in the system
- When you click a specific city, you should be taken to the corresponding Businesses page for that city

### Businesses Component (Page)

- Display list of all businesses in the specific city
- Display the services available at each business (Software Development, IT Consulting, Restaurant, etc.)
- Display the average review (out of 5) for each business
- Display the total number of reviews for each business
- When you click a specific business, you should be taken to the corresponding Reviews page for that business
- Include a back button to the Cities page

### Reviews Component (Page)

- Display the list of all reviews for that specific business
- Display the author of each review
- Display the rating for each review
- Display the body of each review
- Include a back button to the Businesses page

### Add Review Component (Page)

- Allow a user to add a new city
- Allow a user to add a new business
- Allow a user to add a new review
- Make sure you validate the inputs using Angular validation (City names should only have alphabet values, number fields should not accept alphabets, and so on)
- Once a review is added, you should redirect to the homepage (Cities)

### Pages

Each of the pages listed above will be in a `pages` directory. In order to do this, type the `ng generate component` command and when it asks for the name of the component, you can type `pages/<ComponentName>` where you can replace `<ComponentName>` with the name of the page. So for the cities component you could type `pages/cities` but you can name the pages to what you prefer as long as it follows proper naming conventions.

### Data Models

- You should define your data models for a city, business, and review
- You must create a directory called `types` where you will have one TypeScript `interface` declared for each data model
  - **Note:** You can type the `ng generate interface` command and then when it asks for the interface name you can put `types/<InterfaceName>` where you replace `<InterfaceName>` with the name of the interface. For example, for the city data model you could use `types/city` but you are welcome to use any name you prefer as long as it follows the naming convention, and then follow this naming convention for the other types
- These interface types must be used when implementing the code -- handling raw data that is not explicitly typed into these types is not allowed and will result in losing points
  - This is where TypeScript excels

### Data Services

- Create a data service for each of the corresponding data models, these service files will act as the `Model` in the `MVC Architecture`
- You can type the Angular `ng generate service` CLI command and when it asks you for the service name you can put `services/<ServiceName>` where you replace `<ServiceName>` with the name of the service. For example, for the city data service you could use `services/CityModel` but you are welcome to use any name you prefer as long as it follows the proper naming conventions, and then follow this naming convention for the other services.
- These `models` or `services` will be used to handle the data for your application
- You may decide how to structure the stored data
  - nested Objects
  - separate arrays with references
  - etc.
- All data operations must be performed in this service
  - The only exception is reading data -- data may be directly read/filtered in the consuming components, but only if it has already been pulled from the service
    - **Note:** You cannot access local storage, or databases from components
    - **Note:** If you already have a local variable in the service that contains the info you need, you may directly access that
    - **Note:** If you are not clear on this requirement or other requirements, then make sure you verify first and do not guess
  - If you are adding data, you will need to create a function in this service to call from the components
- Data must be at stored persistently in client-side storage (you can refresh the page without losing all data)
  - You may choose how to accomplish this
  - You can use the examples from the class like IndexedDB, LocalStorage, etc.

### Id Service

- Create a service called `IdService`
- All of the `interfaces` in your data model must include an `id`
- This service will contain one method, `generateId()`, that returns a random string of characters to be used as an `id`
- Requirements for `id`
  - 16 characters (a-zA-Z0-9)
  - Include a seed based on the **time** and a **randomly generated number**
- Look into how IDs are created in modern database systems for inspiration. A great example is how Firebase generates their IDs.

### Angular Reactive Forms

- Any time you need input from a user, you must use [Angular Reactive Forms](https://angular.io/start/start-forms)
- The form logic must be scoped to relevant component, i.e. do not create a service for this

### Routing

- You must use Angular routing
- Each page must have an explicit route
- You must handle wildcard routes and default routes
  - `''` and `'**'`
- The routes for businesses and reviews must accept parameters in the url
  - Ex: `:cityId`
- Your site must work if the user hits the endpoints and does not result in a 404 error
  - When using an Apache Server, you will need to use an `.htaccess` file similar to the previous challenges
  - When using an Apache Server, you will need to specify the `base-href`
  - However, for a Node Server, you DO NOT need to specify the `base-href`
  - Check out the documentation from [Angular Deployment](https://angular.io/guide/deployment) in order to deploy your application correctly

### Model-View-Controller Architecture Pattern:

- Your code must follow the Model-View-Controller Architecture Pattern that was discussed in class.
  - This means the model is completely independent from the controller and the view, the controller is completely independent from the model and view, and the view is completely independent from the model and controller.
  - In short, the model should know nothing about the view, the controller handles both managing the model and updating the view, and the view tells the controller about the user actions.
  - Lastly, the communication between the MVC architecture should exist both ways in each layer as shown in this diagram (i.e. Two-Way Communication between each Component in MVC):
  - ![MVC Architecture Pattern Discussed in Class](https://developer.apple.com/library/archive/documentation/General/Conceptual/DevPedia-CocoaCore/Art/model_view_controller_2x.png "MVC Architecture Pattern Discussed in Class")
  - This means the Controller should communicate to the View and the View should communicate back to the controller. The Controller should also communicate to the Model and the Model should communicate back to the Controller. The communication is both ways. However, the Model will never communicate with the View directly. The code in the MVC lecture demonstrates this communication technique, you can find the link on the Canvas page for this challenge.
- I recommend you read Oracle's documentation here: [Application Design With MVC](https://www.oracle.com/technical-resources/articles/javase/mvc.html)
  - Even though it talks about Java, a lot of the definitions and architecture patterns come from this article
  - This article will be one of the most important for the MVC question set
- Apple has a good diagram and specific MVC architecture pattern we are using:
  - [Model-View-Controller Concepts](https://developer.apple.com/library/archive/documentation/General/Conceptual/CocoaEncyclopedia/Model-View-Controller/Model-View-Controller.html)
  - [Model-View-Controller](https://developer.apple.com/library/archive/documentation/General/Conceptual/DevPedia-CocoaCore/MVC.html)
- Google has a good diagram and good readings about MVC for web development:
  - [Web MVC Architecture](https://developer.chrome.com/apps/app_frameworks)
- In these articles, the components may be named slightly different than in Angular world, but that is okay. What we are looking for is the separation of code into proper MVC components.
  - [MVC in Angular World](https://scotch.io/tutorials/mvc-in-an-angular-world)
- Make sure to use proper programming techniques for Model-View-Controller architecture.
- Make sure you separate the code for the controller from the view code by putting them into different files. Using Angular, this should be accomplished already, which is why we are using a MVC framework. Make sure the model does not talk directly to the view.
  - The view will be the HTML file
  - The controller will be the TypeScript `.ts` file in the component
  - The Model will be the Service Files using the Data Interface Types and corresponding `functions()` to manipulate the data
    - Basic CRUD operations (Create, Read, Update, and Delete)
    - AGAIN, MAKE SURE the MODEL does NOT TALK to the VIEW DIRECTLY

### General

- Styling
  - The layout and design of the user interface is up to you. You get to decide the locations and designs of the buttons, how to display the information, and how to collect the information. You could use Ionic, Angular Material, or even Bootstrap `cards` and `form elements`. You can even use your own CSS, but I recommend to try to use a framework or library.
    - **Note:** We will be using Ionic here soon, by starting Ionic now, it will benefit you for the next challenge. Therefore, Ionic would be my highest recommendation because it can help you later. If you don't feel comfortable then my next choice would be to use Angular Material design which will be useful for the industry and is a common used CSS library. My last choice would be Bootstrap because it will not benefit you for the course and it is not the most common library to use with Angular, however it is familiar with most web developers.
  - Whatever you choose should be a well-organized, thoughtful, aesthetically pleasing, and a useable interface or an interface that logically makes sense. The layout should look like you made intentional choices and are in control of their placement. This means the layout should not be a disorganized mess that is a result of not knowing how to implement the user interface, layout, and/or code in a meaningful way.
  - The application should look presentable, i.e. no raw HTML
  - Use Ionic or Angular Material if you do not feel comfortable writing your own styles (i.e. CSS, SCSS, etc.)
  - **Note:** When using a framework or library, make sure you install them with `npm` or `ng add` so they are in your `package.json` file. That way when we clone your repository and run `npm install` then we will get all the required packages and node modules to run your application. If you install them yourself or include external CSS links, then you will get points deducted. Essentially, if we run `npm install` and cannot run your application, then we will not be able to run your application and you will receive a zero for your challenge. This was discussed in class back on our first Angular application where I showed how to use Bootstrap with an external CSS link and then we used `ng add` which was the better way. What you can do is clone your own repository in a new location on your machine and try to run `npm install` to see if the app will run, if not, fix it up before you submit.
- Error handling
  - The application should work as intended
  - Thoroughly check your functionality -- try to break your app so you can find bugs
    - It's better if you find bugs instead of us
    - If we find bugs then you will get points deducted
- Do not use `[(ngModel)]`
  - If you ever feel like you need it, use Angular Reactive Forms for this challenge
  - Remember we discussed this in the class, Angular Reative Forms provide direct, explicit access to the underlying forms object model. Compared to template-driven forms, Reative Forms are more robust: they're more scalable, reusable, and testable. If forms are a key part of your application, or you're already using reactive patterns for building your application, use reactive forms. Therefore, Reative forms are the recommended way by the documentation.
    - Template-driven forms are okay too, in fact reative forms and template driven forms have their own pros and cons. Template-driven forms rely on directives in the template to create and manipulate the underlying object model. They are useful for adding a simple form to an app, such as an email list signup form. They're easy to add to an app, but they don't scale as well as reactive forms. If you have very basic form requirements and logic that can be managed solely in the template, template-driven forms could be a good fit.
  - Comparing Reative forms and template driven forms is a requirement in the journal and a good article can be found [here](https://angular.io/guide/forms-overview)
    - Make sure you read all 4 articles in the `forms` section, the link goes to the first one
- Best practices
  - You are expected to follow software development best practices
    - Do not work on `master`
    - Make sure you push your `master` branch and your `dev` branch (or any other branches you have so we can see your commits)
    - If you have questions, ask us, do not assume
  - You are expected to follow Angular best practices
    - If you are unsure how to do something, check multiple sites _including_ official Angular docs
  - You are expected to follow git best practices
    - If you are unfamiliar with git, you should check out some tutorials -- we are only using basic git operations
    - A good rule of thumb is if it feels like you are doing too much work, you are probably doing something wrong
    - When in doubt, **ask before you try stuff**
      - If you do not understand what a command does, do not run it
      - Running commands blindly will create big problems that could result in us not being able to help you fix the problem

## Screenshots Requirements

- Include system clock in all
- A screenshot of each page
- A screenshot of all the code
- More as you see necessary
  - It's better to have too many screenshots than not enough
  - Take screenshots of all the code as well
- Put screenshots in the provided `screenshots/` directory in the Angular project

## Journal Requirements

- Use the file `journal.md` that has been created for you
- A link to your running code
- A detailed summary of what you did
  - Talk about each component and what it is supposed to do
  - Review your architecture and determine if there is a better way to implement
- Compare MVC and Angular's MVC
  - Use the links provided above in the MVC section but feel free to research and look at your own material as well
- Compare Angular Reative Forms and Template Driven Forms
  - Use the links provided above in the General section discussing not using `[(ngmodel)]` but feel free to research and look at your own material as well
- Resources you utilized
- Challenges you faced and how you overcame them
- Screenshots
  - Include your screenshots in the journal with captions
  - You can directly reference the screenshots in the `screenshots/` directory from the markdown

## Canvas Submission Requirement

- Once you are finished and all of your work is on the master branch on GitHub Classroom, download the zipped repo from GitHub
- Submit this downloaded repo on Canvas
  - Should not include any `node_modules`
  - But make sure to include any `assets` you may have used like images, etc.

## Due Date/Time

- This challenge will be due Tuesday, October 20 at 11:59:00PM

## Bonus Opportunities

- The requirements above are minimum requirements, building on top of them and going above and beyond the rest of the class will lead to bonus opportunities.
- Some ideas could be:
  - Add other CRUD operations other than 'C' Create and 'R' Read.
    - You could add delete functionality and/or update functionality.
  - Create more functionality on the page
    - Maybe add another component for comments
    - Maybe add likes into the application
  - Instead of persisting data client-side you could use a database like MongoDB
  - Having a UI above and beyond the rest of the class.
    - Use frameworks like Material, look into their elements, and use as many built in features as possible
    - Can use other frameworks besides Material
    - Add additional elements with your own CSS or SCSS
    - Have a really good user interaction and experience.
  - Create a login, have a profile page for each user, where they can view their own reviews
- Do NOT start out with the bonus, for example, if you try to create a login and have individual user profile pages and you spend too much time on that and don't get the assignment done, that will not be excusable.
  - First get the minimum requirements done, then if you have extra time, try for the bonus opportunity.
  - Get the Minimum Viable Product (MVP) working, then build on top
  - Don't overwhelm yourself and then get nothing done

# Notes from Original README created by Angular CLI:

## Challenge4TemplateF20

This project was generated with [Angular CLI](https://github.com/angular/angular-cli) version 10.1.3.

### Development server

Run `ng serve` for a dev server. Navigate to `http://localhost:4200/`. The app will automatically reload if you change any of the source files.

### Code scaffolding

Run `ng generate component component-name` to generate a new component. You can also use `ng generate directive|pipe|service|class|guard|interface|enum|module`.

### Build

Run `ng build` to build the project. The build artifacts will be stored in the `dist/` directory. Use the `--prod` flag for a production build.

### Running unit tests

Run `ng test` to execute the unit tests via [Karma](https://karma-runner.github.io).

### Running end-to-end tests

Run `ng e2e` to execute the end-to-end tests via [Protractor](http://www.protractortest.org/).

### Further help

To get more help on the Angular CLI use `ng help` or go check out the [Angular CLI README](https://github.com/angular/angular-cli/blob/master/README.md).

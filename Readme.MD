<h1>Start the NodeJS Server</h1>
```bash
cd api
npm install
nodemon server
```

<h1>Start the React App</h1>
```bash
cd my-app
npm install
npm start
```

Story:
Looking at gettacar.com’s catalog page (https://www.gettacar.com/used) we’d like to make it
more appealing and colorful.

Goal:

Catalog’s first page to have at least 5 different colors of cars
Requirements:
1. Build a small app with a basic Car model:
a. CarID
b. Make
c. Model
d. Color
2. Cars data is supplied on fs_cars.csv file
3. Write a naive ‘search’ API:
- Gets page number & Make/Model filters (I should be able to filter by Chvrolet, Camry,
etc)
- Returns the cars on the next page (yields a new csv file on every call)
4. Page size: 21 cars
5. Write a Unit Test which validates your code

Any questions?
Email me at nurit.basson@gettacar.com
If for some reason I didn’t reply - make an assumption and move on
----------------------------------
Ideas for implementation:

a) Use NodeJS, React repo on github.

--> It already has bootstrap.
--> Use the flipping cards feature of bootstrap
--> User React search feature code from MAH Repo.
--> For Search Feature: Create listener on every letter typed. when user lifts finger, frontend should send request to server for the results of the given search & the dom should update automatically onClick
--> The attached CSV (xlsx) file should be converted into JSON
--> The data of the JSON file, should be injected into the CarsXE API Calls -> Which are triggered every time that a button is released

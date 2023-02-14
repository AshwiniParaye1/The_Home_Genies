![home](https://user-images.githubusercontent.com/104343839/218651356-41a6a5a6-da8b-4f1e-9ed0-af39b40802c0.png)

# Getting Started with Create React App

This project was bootstrapped with [Create React App](https://github.com/facebook/create-react-app).

This is a web application built with React and Firebase that allows users to buy and sell houses. The application uses Firebase authentication and Firestore to store user data and house listings.

# To use "The-Home-Genies" application, follow these steps:

Clone the project from GitHub

Navigate to the project repository on GitHub
Click on the "Code" button and copy the HTTPS link
Open your terminal and navigate to the directory where you want to clone the project
Run the command git clone <HTTPS link>

# Install dependencies

Navigate to the project directory in your terminal
Run the command npm install to install the necessary dependencies

# Set up Firebase

Go to the Firebase website and create a new project
In the project settings, navigate to the "Service Accounts" tab
Generate a new private key and download the JSON file
Rename the JSON file to firebase.json and move it to the project directory
In the Firebase console, enable authentication and Firestore for your project
In the Firebase console, create a new web app and copy the config object
Create a new file in the project directory called .env.local
Add the following lines to the file:
makefile
Copy code
REACT_APP_GEOCODE_API_KEY=<your API key>

Replace the values with the corresponding values from your Firebase config object

# Start the application

Run the command npm start to start the application
The application should open in your default web browser at http://localhost:3000/

# Use the application

Sign up for an account or log in with an existing account
Click on the "Sell or Rent Your Home" button to create a new house listing
Fill out the form with information about the house and upload photos
Click on the "Create Listing" button to create the listing
View your own listings or browse other listings on the home page also you can edit or delete a listing.


### That's it! You can now use "The-Home-Genies" application to buy and sell houses. If you have any questions or issues, feel free to reach out to me : )
https://the-home-genies.vercel.app/

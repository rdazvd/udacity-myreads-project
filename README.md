# MyReads Project

A basic reading list app written purely in React, as part of the Udacity React Nanodegree Program.
The purpose of this project is to validate basic knowledge of React app development fundamentals
such as proper componentization, routing, conditional rendering, component state creation and management, among other concepts.


## Setting up and running

First things first, you will need a fairly updated version of Node.js (>= v6.x), which includes the Node Package Manager (npm).
You can check if you have Node installed or up to date from your system terminal with
`node --version`. Both Node and npm can be installed from a single download [here](https://nodejs.org/en/)).

Once you have Node set up, follow the steps below:

Using the terminal, navigate to the directory where you want to store the app and clone this repo

```
git clone https://github.com/rdazvd/udacity-myreads-project.git
``` 

Then, use npm to install all dependencies locally

```
npm install
```

This will download and install all required dependencies.
Once it is done, the app can be launched with

```
npm start
```

At the terminal, you should see a notification that it is running

```
Compiled successfully!

The app is running at:

  http://localhost:3000/
```

You can now load the app by visiting [localhost:3000](http://localhost:3000) in your Web browser.
At any moment, you can stop running it by going to the terminal window where it is active and pressing `ctrl-c`.

## Usage

### Main Screen
The main screen shows a list of books divided into three categories: Currently Reading, Want To Read and Read.

- To move a given book to a different category, click on the green button at the lower right-hand corner of that book and select a different category from the dropdown menu
- To remove a book from the list, select "None" from the dropdown menu

### Search Screen
You can navigate to the search screen by clicking on the plus icon on the lower right corner of the main screen.

- Type in a search term at the input at the top to trigger a search query and see the results below it.
- To include a given book in the list, click on the green button at the lower right-hand corner of that book and select a category from the dropdown menu
- To navigate back to the main screen, click on the back arrow icon on the top left-hand corner of the search screen

Note that the backend API is limited to the following fixed set of search terms:

```
'Android', 'Art', 'Artificial Intelligence', 'Astronomy', 'Austen', 'Baseball', 'Basketball', 'Bhagat', 'Biography', 'Brief', 'Business', 'Camus', 'Cervantes', 'Christie', 'Classics', 'Comics', 'Cook', 'Cricket', 'Cycling', 'Desai', 'Design', 'Development', 'Digital Marketing', 'Drama', 'Drawing', 'Dumas', 'Education', 'Everything', 'Fantasy', 'Film', 'Finance', 'First', 'Fitness', 'Football', 'Future', 'Games', 'Gandhi', 'History', 'History', 'Homer', 'Horror', 'Hugo', 'Ibsen', 'Journey', 'Kafka', 'King', 'Lahiri', 'Larsson', 'Learn', 'Literary Fiction', 'Make', 'Manage', 'Marquez', 'Money', 'Mystery', 'Negotiate', 'Painting', 'Philosophy', 'Photography', 'Poetry', 'Production', 'Program Javascript', 'Programming', 'React', 'Redux', 'River', 'Robotics', 'Rowling', 'Satire', 'Science Fiction', 'Shakespeare', 'Singh', 'Swimming', 'Tale', 'Thrun', 'Time', 'Tolstoy', 'Travel', 'Ultimate', 'Virtual Reality', 'Web Development', 'iOS'
```

### Licensing
This project is licensed under the terms of the MIT license.
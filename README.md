# react-native-redux-todo-firebase

A basic react native todo app using Redux 

  - Redux to manage state
  - Splitted reducers to handle different states specifically - Used combineRedcers to combine the different reducers so as to act similar to that of a single reducer to make it more readable
  - Used connect() to connect the React component to a Redux store and then dispatch actions to create the todo
  - Used action creators and action types for proper code management and better readability
  - Integrated firebase to store, retrieve todos as well as updates firebase while marking status to complete/incomplete

## Features

  - Add Todos and display the list with firebase
  - Mark todos complete and incomplete with firebase

### Installation

The app was developed with [Node.js](https://nodejs.org/) v12+ .

Clone the repo and run the server

```sh
git clone https://github.com/dilipthakur87/react-native-redux-todo-firebase.git
cd react-native-redux-todo-firebase
yarn install
yarn start
```

After this you can scan the qr to run the app on you phone. Make sure you have installed expo client on your phone.

### Todos

 - Delete/Update using firebase
 - Filter todolist based on the status (completed/incomplete/both)
 - Write tests

License
----

**Free Software, Hell Yeah!**
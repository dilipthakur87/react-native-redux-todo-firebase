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

 ### Tips for deleting sensitive file from github and commit history without affecting the local files and features added during same commit.

 **Issue Faced :** I accidently pushed my config file to git without adding it to the gitignore file. I tried to remove it but it still was there in the commit history. So I had to delete that specific file without affecting any feature changes and commit message, from git while reflecting no changes to my local file. 
 
 **How I solved it :**
 ```sh
 git filter-branch --force --index-filter \
  "git rm --cached --ignore-unmatch PATH-TO-YOUR-FILE-WITH-SENSITIVE-DATA" \
  --prune-empty --tag-name-filter cat -- --all
 git push --force --verbose --dry-run
 git push --force
 ```

License
----

**Free Software, Hell Yeah!**
# Redux #

Redux is a predictable state container in javascript apps

### it is for javaScript apps
### it is for state container
### it is predictable

***Redux is for javaScript application***
Redux is not tied to react
Can be used with any liabrary like react ,Angular, vue or even vannila JS
Redux is a liabray for javascript applications

***Redux is for state container***
Redux sotres the state of our applications
consider react app -state of component
state of an app is the state represented by all the individual components of that app this includes the
data and the UI logic.

## loginForm Component:-
state = {
    usename:
    email:
    password:
}

## userListComponent:-
state = {
    users:[]
}

if the application size is meduim - large the application state looks like this:

## Application:-

state = {
    userLoggedIn: true,
    username: '',
    profileURL:'',
    onlineUsers: [],
    isModalOpened: false
}

***Redux is Predictable***
predictable in what way ?
Redux is state container
In Redux, the state transition are explicit and it is possible to keep trak on them
The changes to your applications state become predictable

 **Redux is the predictable state container in javaScript apps*
   Manages the state of our application in predictable way, redux can help you.

***React + Redux ?***
 why do we need redux in our application ?
 Component in react have their own state
 Why do we need another tool to help manage that state ?

 ## Do We Really Have a Problem ?
 React context - props drilling
 useContext - useReducer ?
 Redux 1.0 August 2015 when these are not available

## React - Redux
 React - UI liabrary
 Redux - state management liabrary
 They both work indipendently each other to directly use react in our applicaition it confusing and difficult. for that reason we have react-redux package

React-Redux is the official UI binding liabrary for the react

## Summary
React is UI liabrary
Redux is a state managing liabrary in predictable manner for js apps
React-Redux is a liabrary thar provides to binding to use reactr and redux to gether in the application

## Middleware
It suggested way to extend redux with custom functionality
Provides an third party extension point between dispatching an action and the moment it reaches the reducer
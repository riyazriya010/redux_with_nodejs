const redux = require('redux');
const createStore = redux.createStore
const combineReducers = redux.combineReducers

const Buy_Cake = 'Buy_Cake'
const Buy_Icecream = 'Buy_Icecream'

// creating action what to do
function buyCake(){
    return{
        type: Buy_Cake,
        info: 'First redux action' //optional
    }
}

function buyIceCream(){
    return{
        type: Buy_Icecream,
    }
}

// creating an initialState
// const initialState = {
//     numOfCake: 10
// }

const cakeShopInitialState = {
    numOfCake: 10
}

const iceCreamShopInitialState = {
    numOfIceCream: 10
}

// Reducer funtion for make changes on the state
// const reducer = (state = initialState, action) => {
//     switch(action.type){
//         case Buy_Cake:
//             return{
//                 ...state, numOfCake: state.numOfCake - 1
//             }
//         default: 
//         return state
//     }
// }

const cakeReducer = (state = cakeShopInitialState, action) => {
    switch(action.type){
        case Buy_Cake:
            return{
                ...state, numOfCake: state.numOfCake - 1
            }
        default: 
        return state
    }
}

const iceCreamReducer = (state = iceCreamShopInitialState, action) => {
    switch(action.type){
        case Buy_Icecream:
            return{
                ...state, numOfIceCream: state.numOfIceCream - 1
            }
        default: 
        return state
    }
}

// creating root reducer as all combained reducers
const rootReducers = combineReducers({
    cake: cakeReducer,
    iceCream: iceCreamReducer
})

// redux store that accepts the Action(redcuer) function
const store = createStore(rootReducers)
console.log('Initial State: ',store.getState());

// Register listeners via subscribe() to be notified of state changes
const unSubscribe = store.subscribe(() => console.log('updated state: ',store.getState()));

// invoking the dispatch function with the type od action
store.dispatch(buyCake())
store.dispatch(buyCake())
store.dispatch(buyCake())
store.dispatch(buyIceCream())
store.dispatch(buyIceCream())

// finally we unsubscribe
unSubscribe()


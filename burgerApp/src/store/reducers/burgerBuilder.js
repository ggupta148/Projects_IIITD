import * as actionTypes from '../actions/actionTypes';

const initialState={
    ingredients:null,
    totalPrice:50,
    error:false,
    building:false
}

const INGREDIENTS_PRICE = {
    salad: 10,
    paneer: 5,
    alootikki: 20,
    cheese: 30
}

const reducer =(state=initialState,action)=>{
   // console.log(action.type);
    switch (action.type){
        
        case actionTypes.ADD_INGREDIENTS:
            return{
                ...state,
                ingredients:{
                    ...state.ingredients,
                    [action.ingredientName]:state.ingredients[action.ingredientName] + 1
                },
                totalPrice:state.totalPrice + INGREDIENTS_PRICE[action.ingredientName],
                building:true
            };
        case actionTypes.REMOVE_INGREDIENTS:
            return{
                ...state,
                ingredients:{
                    ...state.ingredients,
                    [action.ingredientName]:state.ingredients[action.ingredientName] - 1
                },
                totalPrice:state.totalPrice - INGREDIENTS_PRICE[action.ingredientName],
                building:true
            };
        case actionTypes.SET_INGREDIENTS:
            return{
                ...state,
                ingredients:{
                    salad:action.ingredients.salad,
                    paneer:action.ingredients.paneer,
                    alootikki:action.ingredients.alootikki,
                    cheese:action.ingredients.cheese
                },
                error:false,
                totalPrice:50,
                building:false
            }
        case actionTypes.FETCH_INGREDIENTS_FAILED:
            return{
                ...state,
                error:true
            }
        default:
            return state;
    }

}

export default reducer;
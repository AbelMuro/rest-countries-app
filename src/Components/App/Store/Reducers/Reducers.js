export default function SearchReducer(state = {search : ''}, action){
    switch(action.type){
       case "set":
            return {search: action.search};
       default: 
            return state;
}
}
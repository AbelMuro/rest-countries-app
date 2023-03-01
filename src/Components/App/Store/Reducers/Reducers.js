export default function SearchReducer(state = {searchResults : {}}, action){
    switch(action.type){
       case "set":
            return {searchResults: action.results};
       default: 
            return state;
}
}
export default function SearchReducer(state = {searchResults : {}}, action){
    switch(action.type){
       case "set":
            return {searchResults: action.results};
       case "get":
            return state;
       default: 
            return state;
}
}
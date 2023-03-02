export function SearchReducer(state = {search : ''}, action){
    switch(action.type){
       case "set":
            return {search: action.search};
       default: 
            return state;
     }
}

export function FilterReducer(state = {filter: ''}, action){

     switch(action.type){
          case 'filter':
               return {filter: action.filter}
          default: 
               return state;
     }

}
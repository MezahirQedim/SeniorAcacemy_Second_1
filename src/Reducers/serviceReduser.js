
const reducer = (state, setState ) => {
    switch(setState.type){
      case "SET_TODO":
        return {
          ...state,
          todo: setState.value
        }
        case "SET_MANY": 
        return {
          ...state,
          many: [...state.many, setState.many]
        }
    }
  }


export default reducer;
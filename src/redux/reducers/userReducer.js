

  
  const userReducer = (state={}, action) => {
    switch (action.type) {
      case "LOGİN_USER":
        return state;
      case "LOGOUT_USER":
        return state;
      default:
        return state;
    }
  };
  
  export default userReducer;
  
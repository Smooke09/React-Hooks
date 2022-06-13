export function numberReducer(state, action) {
  switch (action.type) {
    case "numberAdd2":
      return { ...state, number: state.number + 2 };
    case "sevenDiv":
      return { ...state, number: state.number * 7 };
    case "divTwenty-five":
      return { ...state, number: state.number / 25 };
    case "parsNumber":
      return { ...state, number: parseInt(state.number) };
    case "numberN":
      return { ...state, number: state.number + action.payload };
    default:
      return state;
  }
}

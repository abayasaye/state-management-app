import { UP_ACTION ,DOWN_ACTION, RESET_ACTION,RANDOM_ACTION,UPDATE_ACTION, MATH_ACTION} from "../actions/counter-types";

export const reducer = (state, action) => {
  switch (action.type) {
    case UP_ACTION:
      return state + 1;
    case DOWN_ACTION:
      return state - 1;
    case RESET_ACTION:
      return (state = 0);
    case RANDOM_ACTION:
      return action.payload ;
    case UPDATE_ACTION:
      return action.payload;
      case MATH_ACTION:
      return action.payload;
    default:
      return state;
  }
};

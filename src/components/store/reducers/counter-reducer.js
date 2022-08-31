import { UP_ACTION ,DOWN_ACTION, RESET_ACTION,RANDOM_ACTION} from "../actions/counter-actions";

export const reducer = (state, action) => {
  switch (action.type) {
    case UP_ACTION.type:
      return state + 1;
    case DOWN_ACTION.type:
      return state - 1;
    case RESET_ACTION.type:
      return (state = 0);
    case RANDOM_ACTION.type:
      return Math.floor(Math.random()*100)+1;

    default:
      return state;
  }
};
